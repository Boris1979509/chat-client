<template>
    <main>
        <div
            class="
                flex
                items-center
                justify-between
                border-b border-gray-300
                p-3
            "
        >
            <selected-chat-info
                v-if="selectedChatId && currentChatInfo"
                :current-chat-info="currentChatInfo"
                :clients-count="clientsCount"
            />
            <template v-if="currentUser">
                <app-dropdown icon="dots-vertical">
                    <chat-dropdown-actions
                        :is-join="isUserJoin"
                        @leaveChat="onLeaveChat"
                    />
                </app-dropdown>
            </template>
        </div>
        <no-chats-selected v-if="!selectedChatId || !currentUser" />
        <template v-else>
            <chat-messages
                :is-progress-status-messages="isProgressStatusMessages"
                :messages="currentChatMessages"
                :current-user-id="currentUser._id"
                :is-typing="isTyping"
            />
            <chat-message-form
                @typingMessage="onTypingMessage"
                @sendMessage="onSendMessage"
                @joinChat="onJoinChat"
                :is-join="isUserJoin"
            />
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
    setup() {
        const { t } = useI18n() // translate
        const socket = inject('socket')

        const clientsCount = ref(0)

        /** ONLINE OFFLINE */
        const userStatus = reactive({})
        provide('user-status', userStatus)
        /*--------------------------------*/
        const allUsersOnline = ref(null)
        provide('all-users-online', allUsersOnline)

        const isTyping = ref(false)
        let typingTimeout = false

        const isProgressStatusUserInfo = computed(
            () => store.getters['user/isProgressStatusUserInfo']
        )
        const isProgressStatusMessages = computed(
            () => store.getters['chat/isProgressStatusMessages']
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
        const currentUser = computed(() => store.getters['user/user'])
        /** Is user in chat  */
        const isUserJoin = computed(() =>
            currentUser.value?.chats.includes(selectedChatId.value)
        )
        /** JOIN CHAT */
        const onJoinChat = () => {
            socket.emit(emitters.JOIN_CHAT, {
                chatId: selectedChatId.value,
                username: currentUser.value.username,
                userId: currentUser.value._id,
            })
        }
        /** LEAVE CHAT */
        const onLeaveChat = () => {
            socket.emit(emitters.LEAVE_CHAT, {
                chatId: selectedChatId.value,
                username: currentUser.value.username,
                userId: currentUser.value._id,
            })
        }
        const setTyping = () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout)
            }
            isTyping.value = true
            typingTimeout = setTimeout(() => (isTyping.value = false), 1000)
        }
        const onTypingMessage = () => {
            socket.emit(emitters.USER_TYPING, {
                chatId: selectedChatId.value,
                userId: currentUser.value._id,
            })
        }
        const onSendMessage = (text) => {
            socket.emit(emitters.NEW_MESSAGE, {
                chatId: selectedChatId.value,
                userId: currentUser.value._id,
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

        /** Set status ONLINE || OFFLINE */
        const setStatus = (userId, online) => {
            userStatus['userId'] = userId
            userStatus['online'] = online
        }
        /** USER JOIN ROOM */
        onMounted(async () => {
            socket.on(listeners.NEW_USER_JOIN, async ({ username, userId }) => {
                await store.dispatch(
                    'chat/getSelectedChat',
                    selectedChatId.value
                )
                if (userId !== currentUser.value._id && isUserJoin.value) {
                    /** Message all users (not current user) in room */
                    userChatNotify('User join chat', username)
                } else if (userId === currentUser.value._id) {
                    await store.dispatch(
                        'user/getUser',
                        currentUser.value.email
                    )
                    /** Message for current user in room */
                    userChatNotify('Joined chat')
                }
            })

            /** USER LEAVE CHAT */
            socket.on(listeners.USER_LEAVE_CHAT, async (username) => {
                await store.dispatch(
                    'chat/getSelectedChat',
                    selectedChatId.value
                )
                userChatNotify('User leave chat', username)
            })
            /** REFRESH CURRENT USER AFTER LEAVE CHAT */
            socket.on(listeners.USER_REFRESH_AFTER_LEAVE_CHAT, async () => {
                await store.dispatch('user/getUser', currentUser.value.email)
                await store.dispatch(
                    'chat/getSelectedChat',
                    selectedChatId.value
                )
                userChatNotify('Left chat')
            })
            /** User typing */
            socket.on(listeners.USER_TYPING, ({ chatId, userId }) => {
                if (
                    userId !== currentUser.value._id &&
                    chatId === selectedChatId.value
                )
                    setTyping()
            })
            socket.on(listeners.NEW_MESSAGE, async (message) => {
                if (message.chat === selectedChatId.value) {
                    store.dispatch('chat/addMessage', { ...message })
                    await store.dispatch('chat/getPublicChats')
                }
            })

            /** ONLINE */
            socket.on(listeners.USER_ONLINE, ({ userId, username }) => {
                if (userId !== currentUser.value._id) {
                    userChatNotify('User join chat', username)
                }
                socket.emit(
                    emitters.CLIENTS_COUNT_ONLINE_IN_ROOM,
                    selectedChatId.value
                )
                setStatus(userId, true)
            })
            /** OFFLINE */
            socket.on(listeners.USER_OFFLINE, async ({ userId, username }) => {
                if (userId !== currentUser.value._id) {
                    userChatNotify('User leave chat', username)
                }
                socket.emit(
                    emitters.CLIENTS_COUNT_ONLINE_IN_ROOM,
                    selectedChatId.value
                )
                setStatus(userId, false)
            })

            socket.on(
                listeners.CLIENTS_COUNT_ONLINE_IN_ROOM,
                ({ chatId, count, ids }) => {
                    if (selectedChatId.value === chatId) {
                        clientsCount.value = count
                        allUsersOnline.value = ids
                    }
                }
            )
        })

        return {
            selectedChatId,
            currentChatMessages,
            currentUser,
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
