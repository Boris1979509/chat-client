<template>
    <template v-if="!isJoin">
        <div class="flex justify-center p-2">
            <app-button
                :isButtonLoading="isButtonLoading"
                @click="joinChat"
                color="success"
                type="button"
                >{{ $t('Join chat') }}</app-button
            >
        </div>
    </template>
    <div
        v-else
        class="bg-white p-3 border-t border-gray-200 absolute right-0 left-0 h-[73px] bottom-[64px]"
    >
        <div class="flex gap-3">
            <app-textarea
                v-model.trim="message"
                :isFocus="isFocus"
                class="grow-2"
                @keyup.enter.exact.prevent="sendMessage"
            />
            <div class="grow-1">
                <button
                    @click="sendMessage"
                    type="button"
                    class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-400 focus:outline-none"
                >
                    <app-icon
                        icon="paper-airplane"
                        class="h-6 w-6 transform rotate-90"
                    />
                </button>
            </div>
        </div>
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
