<template>
    <div class="h-screen grid grid-cols-3 min-w-full min-h-full">
        <Aside class="col-span-1" />
        <current-chat class="col-span-2" />
    </div>
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'
import emitters from '@/plugins/socket/emitters'
import CurrentChat from '@/components/chat/CurrentChat.vue'
import Aside from '@/components/chat/Aside.vue'
export default {
    name: 'Home',
    setup() {
        const socket = inject('socket')
        const store = useStore()

        const setUserOnline = (user) => {
            socket.emit(emitters.SET_USER_ONLINE, user)
        }
        store.watch(
            (state, getters) => getters['user/user'],
            (value) => {
                if (value) setUserOnline(value)
            }
        )
    },
    components: {
        CurrentChat,
        Aside,
    },
}
</script>
