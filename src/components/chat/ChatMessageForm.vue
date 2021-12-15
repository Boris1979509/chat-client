<template>
    <div class="chat-message-form flex justify-center">
        <template v-if="!isJoin">
            <app-button
                :isButtonLoading="isButtonLoading"
                @click="joinChat"
                color="success"
                type="button"
                >{{ $t('Join chat') }}</app-button
            >
        </template>
        <template v-else>
            <div class="flex gap-3 grow">
                <app-textarea
                    v-model.trim="message"
                    :isFocus="isFocus"
                    class="grow-2"
                    @keyup.enter.exact.prevent="sendMessage"
                />
                <div class="grow">
                    <button
                        @click="sendMessage"
                        type="button"
                        class="chat-message-button"
                    >
                        <app-icon
                            icon="paper-airplane"
                            class="h-6 w-6 transform rotate-90"
                        />
                    </button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    name: 'ChatMessageForm',
    emits: ['join-chat', 'typing-message', 'send-message'],
    props: {
        isJoin: {
            type: Boolean,
            required: true,
        },
        isButtonLoading: {
            type: Boolean,
            required: true,
        },
        isSidebarOpen: {
            type: Boolean,
        },
    },
    setup(_, { emit }) {
        const isFocus = ref(false)
        const message = ref('')

        /** Send message */
        const sendMessage = () => {
            emit('send-message', message.value)
            message.value = ''
            isFocus.value = true
        }

        /** Joined chat room */
        const joinChat = () => {
            emit('join-chat')
            isFocus.value = true
        }

        watch(message, () => {
            emit('typing-message')
        })
        return { joinChat, message, sendMessage, isFocus }
    },
}
</script>
