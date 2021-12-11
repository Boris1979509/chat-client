<template>
    <transition
        enter-active-class="transition-opacity ease-linear duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <the-sidebar-mobile-overlay v-show="isActive" @click="$emit('close')" />
    </transition>
    <transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-200 transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
        <div v-show="isActive" class="fixed w-64 bg-white h-full z-30">
            <div class="flex h-16 p-3 items-center border-b border-gray-300">
                <app-hamburger />
            </div>

            <div
                class="
                    overflow-y-auto
                    scrollbar-thumb-blue
                    scrollbar-thumb-rounded
                    scrollbar-track-blue-lighter
                    scrollbar-w-2
                    scrolling-touch
                "
            >
                <chats-list @close="close" />
            </div>
        </div>
    </transition>
</template>

<script>
import TheSidebarMobileOverlay from '@/components/sidebar/TheSidebarMobileOverlay.vue'
import ChatsList from '@/components/chat/ChatsList.vue'

export default {
    name: 'TheSidebarMobile',
    emits: ['close'],
    props: {
        isActive: Boolean,
    },
    setup(_, { emit }) {
        const close = () => {
            emit('close')
        }
        return { close }
    },
    components: { ChatsList, TheSidebarMobileOverlay },
}
</script>
