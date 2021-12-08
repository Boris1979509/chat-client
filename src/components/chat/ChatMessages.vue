<template>
    <div
        class="
            relative
            flex-1
            px-2
            justify-between
            flex flex-col
            h-screen
            bg-white
        "
    >
        <app-loader v-if="isProgressStatusMessages" />
        <template v-else>
            <div
                v-scroll-down="messages.length"
                class="
                    flex flex-col
                    space-y-4
                    p-3
                    overflow-y-auto
                    scrollbar-thumb-blue
                    scrollbar-thumb-rounded
                    scrollbar-track-blue-lighter
                    scrollbar-w-2
                    scrolling-touch
                "
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
                <app-typing v-if="isTyping" />
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
        isTyping: {
            type: Boolean,
            default: false,
        },
        isProgressStatusMessages: {
            type: Boolean,
        },
    },
}
</script>
