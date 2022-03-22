<template>
    <a
        href="#"
        @click.prevent="selectChat"
        :class="[selectedChat ? 'bg-gray-100' : 'hover:bg-gray-50']"
        class="px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none transition duration-200 ease-in-out"
    >
        <app-avatar :name="chatName" :classes="['h-12', 'w-12']" />
        <!-- <span
                v-if="isNewMessageInCurrentChat"
                class="absolute bg-red-500 right-0 top-0 w-2 h-2 rounded-full"
            ></span> -->
        <div class="ml-2 w-full overflow-hidden">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                    <app-icon icon="user-group" class="w-4 h-4 text-gray-600" />
                    <div
                        v-text="chatName"
                        class="font-semibold text-base text-gray-600 truncate"
                    ></div>
                </div>
                <span
                    v-if="lastMessageTime"
                    v-text="$filters.passedTime(lastMessageTime)"
                    class="block ml-2 text-xs text-gray-600 truncate"
                ></span>
            </div>
            <div class="truncate block text-xs">
                <span class="text-blue-400" v-show="lastMessageUsername">
                    {{ lastMessageUsername }}:
                </span>
                <span class="text-gray-400">{{ lastMessageText }}</span>
            </div>
        </div>
    </a>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
    name: 'ChatItem',
    emits: ['select-chat'],
    props: {
        chat: {
            type: Object,
            required: true,
        },
        isSelected: {
            type: Boolean,
            default: false,
        },
        chatIdsPool: {
            type: Array,
            default: () => [],
        },
        currentUser: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {
        const { t } = useI18n() // translate
        const countUsers = computed(() => props.chat.users.length)
        const chatName = computed(() => props.chat.name)
        const lastMessageTime = computed(() =>
            props.chat.lastMessage ? props.chat.lastMessage.time : ''
        )
        const lastMessageText = computed(() =>
            props.chat.lastMessage
                ? props.chat.lastMessage.text
                : t('No messages')
        )
        const lastMessageUsername = computed(() => {
            if (!props.chat.lastMessage) return
            if (props.currentUser._id === props.chat.lastMessage.user._id) {
                return t('You')
            }
            return props.chat.lastMessage.user.username
        })
        const selectedChat = computed(() => props.isSelected)
        const selectChat = () => {
            emit('select-chat', props.chat._id)
        }
        const isNewMessageInCurrentChat = computed(() =>
            props.chatIdsPool.includes(props.chat._id)
        )
        return {
            chatName,
            lastMessageTime,
            lastMessageText,
            lastMessageUsername,
            selectedChat,
            selectChat,
            isNewMessageInCurrentChat,
            countUsers,
        }
    },
}
</script>
