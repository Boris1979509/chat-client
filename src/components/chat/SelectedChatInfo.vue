<template>
    <div>
        <div class="font-bold text-base text-gray-600">
            {{ chatName }}
        </div>
        <div class="text-sm text-gray-400">
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
import { computed, ref } from 'vue'
import ChatInfo from '@/components/chat/ChatInfo.vue'

export default {
    components: { ChatInfo },
    name: 'SelectedChatInfo',
    props: {
        currentChatInfo: {
            type: Object,
            required: true,
        },
        clientsCount: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const modal = ref(false)
        const chatName = computed(() => props.currentChatInfo.name)
        const countUsersChat = computed(
            () => props.currentChatInfo.users.length
        )
        const showModalInfo = () => {
            modal.value = true
        }
        return { chatName, countUsersChat, modal, showModalInfo }
    },
}
</script>
