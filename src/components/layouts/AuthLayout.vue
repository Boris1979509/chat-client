<template>
    <app-bg-pattern />
    <div class="container mx-auto">
        <div class="flex justify-center items-center min-h-screen">
            <div
                class="flex w-full z-10 bg-white lg:w-1/2 overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 ring-inset"
            >
                <app-image :src="imgUrl" alt="App chat" />
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import AppImage from '@/components/ui/AppImage.vue'
import { useSetTitle } from '@/use/setTitle'
import imgUrl from '@/assets/chat-bg.png'
export default {
    name: 'AuthLayout',
    components: {
        AppImage,
    },
    setup() {
        useSetTitle()
        return { imgUrl }
    },
}
</script>
