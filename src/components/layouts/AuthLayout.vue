<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
            <div
                class="flex w-full lg:w-1/2 overflow-hidden rounded-lg shadow ring-1 ring-gray-300 ring-inset"
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
