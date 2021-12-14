<template>
    <main>
        <div
            class="bg-white z-10 flex items-center justify-between border-b border-gray-200 p-3 h-16"
        >
            <app-icon
                v-if="!isSidebarOpen"
                icon="arrow-left"
                class="w-5 h-5 text-gray-600 mr-3 cursor-pointer"
                @click="openMobileSidebar"
            />
            <selected-chat-info
                v-if="selectedChatId && currentChatInfo"
                :current-chat-info="currentChatInfo"
                :clients-count="clientsCount"
                :is-typing="isTyping"
                :user-typing-name="userTypingName"
                :show-info-chat-group-from-dropdown="stateDropdownItem"
                @changeStateDropdownItem="changeStateDropdownItem"
            />
            <template v-if="currentUser">
                <app-dropdown icon="dots-vertical">
                    <chat-dropdown-actions
                        :is-join="isUserJoin"
                        @leaveChat="onLeaveChat"
                        @showInfoChatGroupFromDropdown="
                            showInfoChatGroupFromDropdown
                        "
                        :selectedChatId="selectedChatId"
                    />
                </app-dropdown>
            </template>
        </div>
        <no-chats-selected v-if="!selectedChatId || !currentUser" />
        <template v-else>
            <div class="relative">
                <chat-messages
                    :is-progress-status-messages="isProgressStatusMessages"
                    :messages="currentChatMessages"
                    :current-user-id="currentUser._id"
                />
                <chat-message-form
                    @typingMessage="onTypingMessage"
                    @sendMessage="onSendMessage"
                    @joinChat="onJoinChat"
                    :is-join="isUserJoin"
                    :isButtonLoading="isButtonLoading"
                    :is-sidebar-open="isSidebarOpen"
                />
            </div>
        </template>
    </main>
</template>

<script>
import { computed, inject, provide, onMounted, ref, reactive } from 'vue'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import ChatMessages from '@/components/chat/ChatMessages.vue'
import ChatMessageForm from '@/components/chat/ChatMessageForm.vue'
import emitters from '@/plugins/socket/emitters'
import listeners from '@/plugins/socket/listeners'
import NoChatsSelected from '@/components/chat/NoChatsSelected.vue'
import SelectedChatInfo from '@/components/chat/SelectedChatInfo.vue'
import ChatDropdownActions from '@/components/chat/ChatDropdownActions.vue'

export default {
    name: 'CurrentChat',
    emits: ['toggle-sidebar'],
    props: {
        isSidebarOpen: Boolean,
        currentUser: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {
        const { t } = useI18n() // translate
        const socket = inject('socket')

        const clientsCount = ref(0)
        const isButtonLoading = ref(false)

        /** Call modal from dropdown menu item */
        const stateDropdownItem = ref(false)

        const showInfoChatGroupFromDropdown = (value) => {
            stateDropdownItem.value = value
        }
        const changeStateDropdownItem = (value) => {
            stateDropdownItem.value = value
        }
        /** end */

        /** ONLINE || OFFLINE */
        const allUsersOnline = ref([])
        provide('all-users-online', allUsersOnline)
        /*--------------------------------*/

        const isTyping = ref(false)
        const userTypingName = ref('')
        let typingTimeout = false

        const isProgressStatusUserInfo = computed(
            () => store.getters['user/isProgressStatusUserInfo']
        )
        const isProgressStatusMessages = computed(
            () => store.getters['chat/isProgressStatusMessages']
        )
        const isProgressStatusSelectedChat = computed(
            () => store.getters['chat/isProgressStatusSelectedChat']
        )
        const selectedChatId = computed(
            () => store.getters['chat/selectedChatId']
        )
        const currentChatMessages = computed(
            () => store.getters['chat/currentChatMessages']
        )
        const currentChatInfo = computed(
            () => store.getters['chat/currentChat']
        )
        /** Is user in chat  */
        const isUserJoin = computed(() =>
            props.currentUser?.chats.includes(selectedChatId.value)
        )
        /**  */
        const m = (chatId, username, userId) => ({ chatId, username, userId })

        /** JOIN CHAT */
        const onJoinChat = () => {
            isButtonLoading.value = true
            socket.emit(
                emitters.JOIN_CHAT,
                m(
                    selectedChatId.value,
                    props.currentUser.username,
                    props.currentUser._id
                )
            )
        }
        /** LEAVE CHAT */
        const onLeaveChat = () => {
            socket.emit(
                emitters.LEAVE_CHAT,
                m(
                    selectedChatId.value,
                    props.currentUser.username,
                    props.currentUser._id
                )
            )
        }
        const setTyping = () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout)
            }
            isTyping.value = true
            typingTimeout = setTimeout(() => (isTyping.value = false), 1000)
        }
        /** Run typing  */
        const onTypingMessage = () => {
            socket.emit(
                emitters.USER_TYPING,
                m(
                    selectedChatId.value,
                    props.currentUser.username,
                    props.currentUser._id
                )
            )
        }
        const onSendMessage = (text) => {
            socket.emit(emitters.NEW_MESSAGE, {
                chatId: selectedChatId.value,
                userId: props.currentUser._id,
                text,
            })
        }
        /** Notifications  */
        const userChatNotify = (message, username = '') => {
            store.dispatch(
                'setNotify',
                {
                    type: 'info',
                    message: t(message, { username }),
                },
                { root: true }
            )
        }
        /** USER JOIN ROOM */
        onMounted(() => {
            socket.on(
                listeners.NEW_USER_JOIN,
                async ({ username, userId, chatId }) => {
                    if (
                        userId !== props.currentUser._id &&
                        isUserJoin.value &&
                        selectedChatId.value === chatId
                    ) {
                        userChatNotify('User join chat', username)
                    } else if (userId === props.currentUser._id) {
                        await store.dispatch(
                            'user/getUser',
                            props.currentUser.email
                        )
                        /** Message for current user in room */
                        userChatNotify('Joined chat')
                    }
                    await store.dispatch('chat/getSelectedChat', chatId)
                    isButtonLoading.value = false
                }
            )

            /** USER LEAVE CHAT */
            socket.on(
                listeners.USER_LEAVE_CHAT,
                async ({ chatId, username }) => {
                    /** If current chat, show all message */
                    if (selectedChatId.value === chatId && isUserJoin.value) {
                        userChatNotify('User leave chat', username)
                    }
                    await store.dispatch('chat/getSelectedChat', chatId)
                }
            )
            /** REFRESH CURRENT USER AFTER LEAVE CHAT */
            socket.on(listeners.USER_REFRESH_AFTER_LEAVE_CHAT, async () => {
                await store.dispatch('user/getUser', props.currentUser.email)
                userChatNotify('Left chat')
            })
            /** User typing */
            socket.on(listeners.USER_TYPING, ({ chatId, userId, username }) => {
                if (
                    userId !== props.currentUser._id &&
                    chatId === selectedChatId.value
                ) {
                    userTypingName.value = username
                    setTyping()
                }
            })
            socket.on(listeners.NEW_MESSAGE, async (message) => {
                if (message.chat === selectedChatId.value) {
                    store.dispatch('chat/addMessage', { ...message })
                    await store.dispatch('chat/getPublicChats')
                }
            })

            /** ONLINE */
            socket.on(listeners.USER_ONLINE, ({ userId, username }) => {
                if (userId !== props.currentUser._id) {
                    userChatNotify('User online', username)
                }
                socket.emit(emitters.FETCH_COUNT_SOCKETS_IN_ROOM, {
                    chatId: selectedChatId.value,
                    state: true, // emit all sockets
                })
            })
            /** OFFLINE */
            socket.on(listeners.USER_OFFLINE, async ({ userId, username }) => {
                if (userId !== props.currentUser._id) {
                    userChatNotify('User offline', username)
                }
                socket.emit(emitters.FETCH_COUNT_SOCKETS_IN_ROOM, {
                    chatId: selectedChatId.value,
                    state: true, // emit all sockets
                })
            })
            /** FETCH COUNT USERS IN CHAT ROOM */
            socket.on(
                listeners.FETCH_COUNT_SOCKETS_IN_ROOM,
                async ({ chatId, count, ids = [] }) => {
                    if (chatId && selectedChatId.value === chatId) {
                        clientsCount.value = count
                        allUsersOnline.value = ids
                    }
                }
            )
        })
        /** Mobile sidebar */
        const openMobileSidebar = () => {
            emit('toggle-sidebar')
        }
        return {
            selectedChatId,
            currentChatMessages,
            isUserJoin,
            onJoinChat,
            onLeaveChat,
            onTypingMessage,
            onSendMessage,
            isTyping,
            isProgressStatusMessages,
            isProgressStatusUserInfo,
            currentChatInfo,
            clientsCount,
            isButtonLoading,
            userTypingName,
            openMobileSidebar,
            showInfoChatGroupFromDropdown,
            stateDropdownItem,
            changeStateDropdownItem,
        }
    },
    components: {
        ChatMessages,
        ChatMessageForm,
        NoChatsSelected,
        SelectedChatInfo,
        ChatDropdownActions,
    },
}
</script>
