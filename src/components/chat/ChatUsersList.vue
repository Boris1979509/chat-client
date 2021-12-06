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

        /** io.sockets.emit */
        const userStatus = inject('user-status')

        /** is user online */
        const isOnline = (userId) => {
            console.log(userId, userStatus)
            if (userStatus.userId === userId && userStatus.online) {
                return true
            } else if (userStatus.userId === userId && !userStatus.online) {
                return false
            } else {
                return allUsersOnline.value.some((item) => item === userId)
            }
        }
        return { isOnline }
    },
}
</script>
