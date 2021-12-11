<template>
    <div class="chat-message">
        <div
            class="flex items-end"
            :class="{ 'justify-end': isCurrentUserMessage }"
        >
            <div
                :class="[
                    isCurrentUserMessage
                        ? 'order-1 items-end'
                        : 'order-2 items-start',
                ]"
                class="flex flex-col space-y-2 text-sm max-w-xs"
            >
                <div>
                    <div
                        class="px-4 py-2 rounded-lg inline-block"
                        :class="[
                            isCurrentUserMessage
                                ? 'rounded-br-none bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-600 rounded-bl-none',
                        ]"
                    >
                        <template v-if="username">
                            <div>{{ username }}</div>
                        </template>
                        <div>{{ message.text }}</div>
                        <div class="flex flex-col items-end text-xs">
                            <div>{{ $filters.passedTime(message.time) }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <app-avatar
                v-if="!isCurrentUserMessage"
                :name="username"
                :classes="['h-10', 'w-10', 'mr-2']"
            />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'ChatMessageItem',
    props: {
        message: {
            type: Object,
            required: true,
        },
        isCurrentUserMessage: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        /** If not curren user show username */
        const username = computed(() =>
            !props.isCurrentUserMessage ? props.message.user.username : null
        )
        return { username }
    },
}
</script>
