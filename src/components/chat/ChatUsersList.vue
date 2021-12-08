<template>
    <chat-user-item
        v-for="user in users"
        :key="user._id"
        :user="user"
        :is-online="isOnline(user._id)"
    />
</template>

<script>
import { inject } from 'vue'
import ChatUserItem from '@/components/chat/ChatUserItem.vue'
export default {
    components: { ChatUserItem },
    name: 'ChatUsersList',
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const allUsersOnline = inject('all-users-online')

        /** is user online */
        const isOnline = (userId) => {
            return allUsersOnline.value.some((item) => item === userId)
        }
        return { isOnline }
    },
}
</script>
