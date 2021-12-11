<template>
    <transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-200 transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
        <div
            v-show="isActive"
            class="
                fixed
                xl:block
                top-0
                left-0
                w-64
                bg-white
                h-full
                border-r border-gray-200
            "
        >
            <div class="flex h-16 p-3 items-center border-b border-gray-200">
                <app-hamburger />
            </div>
            <chats-list />
        </div>
    </transition>
</template>

<script>
import ChatsList from '@/components/chat/ChatsList.vue'

export default {
    name: 'TheSidebar',
    props: {
        isActive: Boolean,
    },
    components: { ChatsList },
}
</script>
