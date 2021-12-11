<template>
    <div class="h-screen min-w-full min-h-full">
        <the-sidebar :is-active="isSidebarOpen" />
        <the-sidebar-mobile
            :is-active="isMobileSidebarOpen"
            @close="closeMobileSidebar"
        />
        <div :class="[isSidebarOpen ? 'ml-64' : 'ml-0']">
            <current-chat
                @toggle-sidebar="toggleSidebar"
                :is-sidebar-open="isSidebarOpen"
            />
        </div>
    </div>
</template>

<script>
import { inject, watch, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useSetTitle } from '@/use/setTitle'
import emitters from '@/plugins/socket/emitters'
import CurrentChat from '@/components/chat/CurrentChat.vue'
import TheSidebar from '@/components/sidebar/TheSidebar.vue'
import TheSidebarMobile from '@/components/sidebar/TheSidebarMobile.vue'
import { useSidebar } from '@/use/sidebar'
export default {
    name: 'Home',
    setup() {
        useSetTitle()
        const socket = inject('socket')
        const store = useStore()
        const user = computed(() => store.getters['user/user'])

        const isWatchOnce = ref(true)

        const setUser = () => {
            if (user.value?.chats && user.value.chats.length) {
                socket.emit(emitters.SET_USER_ONLINE, user.value)
            }
            isWatchOnce.value = false
        }
        watch(user, (value) => {
            if (value && isWatchOnce.value) setUser()
        })
        return { ...useSidebar() }
    },
    components: {
        CurrentChat,
        TheSidebar,
        TheSidebarMobile,
    },
}
</script>
