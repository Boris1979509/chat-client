<template>
    <div class="relative flex-1 justify-between flex flex-col h-screen">
        <app-loader v-if="isProgressStatusMessages" />
        <template v-else>
            <div v-scroll-down="messages.length" class="chat-messages-area">
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
        <app-bg-pattern />
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
