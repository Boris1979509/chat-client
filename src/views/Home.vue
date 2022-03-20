<template>
    <div class="h-screen min-w-full min-h-full overflow-hidden">
        <!-- SIDEBAR -->
        <the-sidebar :is-active="isSidebarOpen">
            <template v-slot:header>
                <app-hamburger @click="openSidebarSettings" />
                <app-search v-model="searchQuery" />
            </template>
            <template v-slot:body>
                <chats-list :search-query="searchQuery" />
            </template>
        </the-sidebar>
        <!---->
        <!-- SIDEBAR MOBILE -->
        <the-sidebar-mobile
            :is-active="isMobileSidebarOpen"
            @close="closeMobileSidebar"
        >
            <template v-slot:header>
                <app-hamburger @click="openSidebarSettings" />
                <app-search v-model="searchQuery" />
            </template>
            <template v-slot:body>
                <chats-list
                    @close="closeMobileSidebar"
                    :search-query="searchQuery"
                />
            </template>
        </the-sidebar-mobile>
        <!---->
        <!-- SIDEBAR SETTINGS -->
        <the-sidebar-settings
            :is-active="isSidebarSettingsOpen"
            @close="closeSidebarSettings"
        >
            <template v-slot:header>
                <user-info
                    v-if="user"
                    :user="user"
                    @close="closeSidebarSettings"
                />
            </template>
            <template v-slot:body></template>
        </the-sidebar-settings>
        <!---->
        <div :class="[isSidebarOpen ? 'ml-64' : 'ml-0']">
            <current-chat
                v-if="user"
                :current-user="user"
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
import TheSidebarSettings from '@/components/sidebar/TheSidebarSettings.vue'
import { useSidebar } from '@/use/sidebar'
import ChatsList from '@/components/chat/ChatsList.vue'
import UserInfo from '@/components/chat/settings/UserInfo.vue'
export default {
    name: 'Home',
    setup() {
        useSetTitle()
        const socket = inject('socket')
        const store = useStore()
        const user = computed(() => store.getters['user/user'])
        const searchQuery = ref('') /** Search query */
        const currentUserId = computed(() =>
            user.value ? user.value._id : null
        )
        const isWatchOnce = ref(true)

        const setUser = () => {
            if (user.value?.chats && user.value.chats.length) {
                socket.emit(emitters.SET_USER_ONLINE, user.value)
            }
            isWatchOnce.value = false
        }
        /** Logout user */
        const logoutUser = () => {
            socket.emit(emitters.LOGOUT, currentUserId.value)
        }
        watch(user, (value) => {
            if (value && isWatchOnce.value) setUser()
        })
        store.watch(
            (_, getters) => getters['auth/isLoggedIn'],
            (value) => {
                if (value === false) logoutUser()
            }
        )
        return { ...useSidebar(), searchQuery, user }
    },
    components: {
        CurrentChat,
        TheSidebar,
        TheSidebarMobile,
        TheSidebarSettings,
        ChatsList,
        UserInfo,
    },
}
</script>
