<template>
    <template v-if="!isJoin">
        <div class="flex justify-center p-2">
            <app-button @click="joinChat" color="success" type="button">{{
                $t('Join chat')
            }}</app-button>
        </div>
    </template>
    <div v-else class="w-full p-3 border-t border-gray-300">
        <div class="flex gap-3">
            <app-textarea v-model.trim="message" class="flex-grow-2" />
            <div class="flex-grow-1">
                <button
                    @click="sendMessage"
                    type="button"
                    class="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        h-12
                        w-12
                        transition
                        duration-500
                        ease-in-out
                        text-white
                        bg-blue-500
                        hover:bg-blue-400
                        focus:outline-none
                    "
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
    },
    setup(_, { emit }) {
        const message = ref('')
        /** Send message */
        const sendMessage = () => {
            emit('send-message', message.value)
            message.value = ''
        }
        const joinChat = () => {
            emit('join-chat')
        }
        watch(
            () => message.value,
            () => {
                emit('typing-message')
            }
        )
        return { joinChat, message, sendMessage }
    },
}
</script>
