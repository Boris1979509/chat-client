<template>
    <vue-load-image class="relative hidden sm:block w-1/2 overflow-hidden">
        <template v-slot:image>
            <img
                :src="src"
                :alt="alt"
                class="object-cover h-full transform scale-110"
            />
        </template>
        <template v-slot:preloader>
            <app-loader />
        </template>
        <template v-slot:error>
            <div class="flex h-full justify-center items-center">
                <div class="text-red-500 text-sm">Image load fails</div>
            </div>
        </template>
    </vue-load-image>
</template>

<script>
import VueLoadImage from 'vue-load-image'
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
    components: {
        VueLoadImage,
    },
}
</script>
