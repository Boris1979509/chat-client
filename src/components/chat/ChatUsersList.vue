<template>
    <chat-user-item
        v-for="user in users"
        :key="user._id"
        :user="user"
        :is-online="isOnline(user._id)"
    />
</template>

<script>
import { useUserIsOnline } from '@/use/userIsOnline'
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
        return { ...useUserIsOnline() }
    },
}
</script>
