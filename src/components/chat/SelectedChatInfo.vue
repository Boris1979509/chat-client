<template>
    <div>
        <div class="font-bold text-base text-gray-600">
            {{ chatName }}
        </div>
        <div class="h-5">
            <chat-typing v-if="isTyping" :user-typing-name="userTypingName" />
            <div v-else class="text-sm text-gray-400">
                <div
                    v-if="countUsersChat"
                    class="cursor-pointer"
                    @click="showModalInfo"
                >
                    {{ countUsersChat }} {{ $t('groupMembers') }}
                    <template v-if="clientsCount">
                        , {{ clientsCount }} {{ $t('online') }}
                    </template>
                </div>
                <div v-else>
                    {{ countUsersChat }} {{ $t('groupMembers') }}
                    <template v-if="clientsCount">
                        , {{ clientsCount }} {{ $t('online') }}
                    </template>
                </div>
            </div>
        </div>
    </div>
    <app-modal
        v-if="modal"
        v-model:state="modal"
        :title="$t('Information about chat group')"
    >
        <chat-info
            :chat-name="chatName"
            :count-users-chat="countUsersChat"
            :users="currentChatInfo.users"
            :clients-count="clientsCount"
        />
    </app-modal>
</template>

<script>
import { computed, ref, watch } from 'vue'
import ChatInfo from '@/components/chat/ChatInfo.vue'
import ChatTyping from '@/components/chat/ChatTyping.vue'

export default {
    components: { ChatInfo, ChatTyping },
    name: 'SelectedChatInfo',
    emits: ['change-state-dropdown-item'],
    props: {
        currentChatInfo: {
            type: Object,
            required: true,
        },
        clientsCount: {
            type: Number,
            required: true,
        },
        isTyping: {
            type: Boolean,
            default: false,
        },
        userTypingName: {
            type: String,
        },
        showInfoChatGroupFromDropdown: {
            type: Boolean,
        },
    },
    setup(props, { emit }) {
        const modal = ref(false)
        const chatName = computed(() => props.currentChatInfo.name)
        const countUsersChat = computed(
            () => props.currentChatInfo.users.length
        )
        const showModalInfo = () => {
            modal.value = true
        }

        /** change state dropdown item on false */
        const changeStateDropdownItem = (value) => {
            modal.value = value
            emit('change-state-dropdown-item', !value)
        }

        watch(
            () => props.showInfoChatGroupFromDropdown,
            (value) => {
                if (value) changeStateDropdownItem(value)
            }
        )
        return { chatName, countUsersChat, modal, showModalInfo }
    },
}
</script>
