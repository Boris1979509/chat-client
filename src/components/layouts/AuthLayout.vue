<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
            <div
                class="
                    flex
                    w-full
                    lg:w-1/2
                    overflow-hidden
                    rounded-lg
                    shadow
                    ring-1 ring-gray-300 ring-inset
                "
            >
                <app-image src="src/assets/chat-bg.png" alt="App chat" />
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import AppImage from '@/components/ui/AppImage.vue'
export default {
    name: 'AuthLayout',
    components: {
        AppImage,
    },
}
</script>
