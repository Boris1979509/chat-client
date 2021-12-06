<template>
    <!-- <div class="my-3 mx-3">
        <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 text-gray-500"
                >
                    <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </span>
            <input
                aria-placeholder="Busca tus amigos o contacta nuevos"
                placeholder="Busca tus amigos"
                class="
                    py-2
                    pl-10
                    block
                    w-full
                    rounded
                    bg-gray-100
                    outline-none
                    focus:text-gray-700
                "
                type="search"
                name="search"
                required
                autocomplete="search"
            />
        </div>
    </div> -->

    <h2 class="p-2 text-gray-600 text-lg">
        {{ $t('Public chats') }}
    </h2>
    <template v-if="chatsList?.length">
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
import { ref, onMounted, computed, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import store from '@/store'
import ChatItem from '@/components/chat/ChatItem.vue'
import emitters from '@/plugins/socket/emitters'
import listeners from '@/plugins/socket/listeners'

export default {
    name: 'ChatsList',
    setup() {
        const route = useRoute()
        const socket = inject('socket')
        const chatsList = computed(() => store.getters['chat/publicChat'])
        /** Current user */
        const currentUser = computed(() => store.getters['user/user'])
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
            await store.dispatch('chat/selectChat', chatId)
            socket.emit(emitters.CLIENTS_COUNT_ONLINE_IN_ROOM, chatId)
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
        const connectChats = (chats) => {
            chats.forEach((chat) => {
                socket.emit(emitters.SELECT_CHAT, chat._id)
            })
        }
        watch(
            () => chatsList.value,
            (value) => {
                if (value) connectChats(value)
            }
        )
        onMounted(async () => {
            await getPublicChats()
            setChatId()
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
