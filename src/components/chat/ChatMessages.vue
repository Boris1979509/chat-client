<template>
    <div class="flex-1 justify-between flex flex-col h-screen bg-white">
        <app-loader v-if="isProgressStatusMessages" />
        <template v-else>
            <div
                v-scroll-down="messages.length"
                class="flex flex-col space-y-2 p-3 overflow-y-auto h-[calc(100%-137px)]"
            >
                <chat-message-item
                    v-if="messages.length"
                    v-for="message in messages"
                    :key="message._id"
                    :message="message"
                    :is-current-user-message="
                        message.user._id === currentUserId
                    "
                />
                <empty-chat-messages v-else />
            </div>
        </template>
    </div>
</template>

<script>
import EmptyChatMessages from '@/components/chat/EmptyChatMessages.vue'
import ChatMessageItem from '@/components/chat/ChatMessageItem.vue'
export default {
    components: { EmptyChatMessages, ChatMessageItem },
    name: 'ChatMessages',
    props: {
        messages: {
            type: Array,
            default: () => [],
        },
        currentUserId: {
            type: String,
            required: true,
        },
        isProgressStatusMessages: {
            type: Boolean,
        },
    },
}
</script>
