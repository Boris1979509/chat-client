<template>
    <div class="flex items-center gap-3 px-6 py-3">
        <div
            class="
                flex
                items-center
                justify-center
                bg-indigo-600
                h-12
                w-12
                rounded-full
            "
        >
            <span
                class="font-bold text-white"
                v-text="$filters.firstChar(chatName)"
            ></span>
        </div>
        <div class="flex-grow">
            <div class="flex items-center gap-1">
                <app-icon icon="user-group" class="w-4 h-4 text-gray-600" />
                <span
                    v-text="chatName"
                    class="block font-semibold text-base text-gray-600"
                >
                </span>
            </div>
            <div class="text-sm text-gray-400">
                <template v-if="countUsersChat">
                    {{ countUsersChat }} {{ $t('groupMembers') }}
                </template>
                <template v-if="clientsCount">
                    , {{ clientsCount }} {{ $t('online') }}
                </template>
            </div>
        </div>
    </div>
    <div class="border-b border-solid border-gray-200"></div>
    <chat-users-list v-if="users.length" :users="users" />
</template>

<script>
import ChatUsersList from '@/components/chat/ChatUsersList.vue'
export default {
    name: 'ChatInfo',
    props: {
        chatName: {
            type: String,
            required: true,
        },
        countUsersChat: {
            type: Number,
            required: true,
        },
        users: {
            type: Array,
            default: () => [],
        },
        clientsCount: {
            type: Number,
            required: true,
        },
    },
    components: {
        ChatUsersList,
    },
}
</script>
