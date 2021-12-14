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
                            <a
                                class="underline"
                                href="#"
                                @click.prevent="showUserInfoModal"
                                >{{ username }}</a
                            >
                        </template>
                        <div>{{ message.text }}</div>
                        <div class="flex flex-col items-end text-xs">
                            <div>{{ $filters.passedTime(message.time) }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="relative mr-2 cursor-pointer"
                @click="showUserInfoModal"
            >
                <app-avatar
                    v-if="!isCurrentUserMessage"
                    :name="username"
                    :is-online="isOnline(message.user._id)"
                />
            </div>
        </div>
    </div>
    <app-modal
        v-if="modal"
        v-model:state="modal"
        :title="$t('Information about user')"
    >
        <user-info v-if="user" :user="user" />
    </app-modal>
</template>

<script>
import { computed, ref } from 'vue'
import store from '@/store'
import { useUserIsOnline } from '@/use/userIsOnline'
import UserInfo from '@/components/chat/settings/UserInfo.vue'
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
        const user = ref(null)
        const currentChatInfo = computed(
            () => store.getters['chat/currentChat'] ?? null
        )
        const modal = ref(false)
        /** If not curren user show username */
        const username = computed(() =>
            !props.isCurrentUserMessage ? props.message.user.username : null
        )
        /** Modal user info */
        const showUserInfoModal = () => {
            if (currentChatInfo.value.users.length && props.message.user._id) {
                const res = currentChatInfo.value.users.filter(
                    (user) => user._id === props.message.user._id
                )
                if (res) {
                    user.value = res[0]
                    modal.value = true
                }
            }
        }
        return {
            ...useUserIsOnline(),
            username,
            showUserInfoModal,
            modal,
            user,
        }
    },
    components: {
        UserInfo,
    },
}
</script>
