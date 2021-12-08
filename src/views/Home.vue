<template>
    <div class="h-screen grid grid-cols-3 min-w-full min-h-full">
        <Aside class="col-span-1" />
        <current-chat class="col-span-2" />
    </div>
</template>

<script>
import { inject, watch, computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import emitters from '@/plugins/socket/emitters'
import listeners from '@/plugins/socket/listeners'
import CurrentChat from '@/components/chat/CurrentChat.vue'
import Aside from '@/components/chat/Aside.vue'
export default {
    name: 'Home',
    setup() {
        const socket = inject('socket')
        const store = useStore()
        const user = computed(() => store.getters['user/user'])

        const isWatchOnce = ref(true)

        const setUser = () => {
            if (user.value?.chats && user.value.chats.length) {
                socket.emit(emitters.SET_USER_ONLINE, user.value)
                console.log('User with chats!')
            }
            isWatchOnce.value = false
        }
        watch(user, (value) => {
            if (value && isWatchOnce.value) setUser()
        })
    },
    components: {
        CurrentChat,
        Aside,
    },
}
</script>
