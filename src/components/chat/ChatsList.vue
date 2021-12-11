<template>
    <template v-if="chatsList && currentUser">
        <div class="overflow-auto h-screen truncate">
            <chat-item
                v-for="chat in chatsList"
                :key="chatsList._id"
                :chat="chat"
                :is-selected="selectedChatId === chat._id"
                @selectChat="selectChat"
                :chat-ids-pool="chatIdsPool"
                :current-user="currentUser"
            />
        </div>
    </template>
    <template v-else>
        <span class="p-2">{{ $t('No public chats') }}</span>
    </template>
</template>

<script>
import { ref, onMounted, computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import store from '@/store'
import ChatItem from '@/components/chat/ChatItem.vue'
import emitters from '@/plugins/socket/emitters'
import listeners from '@/plugins/socket/listeners'

export default {
    name: 'ChatsList',
    emits: ['close'],
    setup(_, { emit }) {
        const route = useRoute()
        const socket = inject('socket')
        const chatsList = computed(
            () => store.getters['chat/publicChat'] ?? null
        )
        /** Current user */
        const currentUser = computed(() => store.getters['user/user'] ?? null)
        const chatIdsPool = ref([])

        /** Not use */
        const isProgressStatusSelectedChat = computed(
            () => store.getters['chat/isProgressStatusSelectedChat']
        )

        const selectedChatId = computed(
            () => store.getters['chat/selectedChatId']
        )
        /** Get chat */
        const getChat = async (chatId) => {
            console.log(chatId)
            await store.dispatch('chat/selectChat', chatId)
            socket.emit(emitters.FETCH_COUNT_SOCKETS_IN_ROOM, {
                chatId,
                state: false,
            })
        }
        const setChatId = async () => {
            const chatId = route.query.chatId
            if (!chatId) return
            await getChat(chatId)
        }
        /** */
        const isExistChatIdInPool = (chatId) =>
            chatIdsPool.value.some((item) => item === chatId)

        const getPublicChats = async () => {
            await store.dispatch('chat/getPublicChats')
        }
        /** Emit selected chat */
        const selectChat = async (chatId) => {
            if (chatId === selectedChatId.value) return
            emit('close') // if open sidebar mobile
            await getChat(chatId)
            removeChatIdFromPool(chatId)
            router.push({ query: { chatId } })
        }
        const removeChatIdFromPool = (chatId) => {
            if (!chatIdsPool.value.length) return
            const idx = chatIdsPool.value.findIndex((item) => item === chatId)
            if (idx !== -1) {
                chatIdsPool.value.splice(idx, 1)
            }
        }
        onMounted(async () => {
            await getPublicChats()
            await setChatId()
            socket.on(listeners.NEW_MESSAGE, (data) => {
                if (data.chat === selectedChatId.value) return
                if (!isExistChatIdInPool(data.chat))
                    chatIdsPool.value.push(data.chat) // chat id
            })
        })
        return {
            chatsList,
            selectChat,
            selectedChatId,
            chatIdsPool,
            isProgressStatusSelectedChat, // not use
            currentUser,
        }
    },
    components: { ChatItem },
}
</script>
