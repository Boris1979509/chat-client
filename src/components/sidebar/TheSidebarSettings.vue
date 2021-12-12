<template>
    <transition
        enter-active-class="transition-opacity ease-linear duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <the-sidebar-overlay v-show="isActive" @click="$emit('close')" />
    </transition>
    <transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-200 transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
    >
        <div v-show="isActive" class="fixed w-64 bg-white h-full z-40">
            <slot name="header" />
            <slot name="body" />
        </div>
    </transition>
</template>

<script>
import TheSidebarOverlay from '@/components/sidebar/TheSidebarOverlay.vue'

export default {
    name: 'TheSidebarSettings',
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
    components: { TheSidebarOverlay },
}
</script>
