<template>
    <div
        :class="[...classes, getRandomBgColor]"
        class="flex items-center justify-center rounded-full shrink-0"
    >
        <span
            class="font-bold text-white text-lg"
            v-text="$filters.firstChar(name)"
        ></span>
    </div>
    <transition name="fade">
        <div
            v-if="isOnline"
            :class="getRandomBgColor"
            class="w-3 h-3 border-2 border-white bottom-0 right-0 absolute rounded-lg"
        ></div>
    </transition>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'AppAvatar',
    props: {
        name: {
            type: String,
            required: true,
        },
        isOnline: {
            type: Boolean,
        },
        classes: {
            type: Array,
            default: () => ['w-10', 'h-10'],
        },
    },
    setup() {
        /**
         * Background colors
         */
        const bg = [
            'bg-red',
            // 'bg-blue',
            // 'bg-orange',
            'bg-green',
            // 'bg-indigo',
            // 'bg-purple',
            // 'bg-sky',
            // 'bg-pink',
        ]
        /** Opacity */
        const opacity = ['400']
        /**
         * Returns random index
         */
        const randomIndex = (arrayName) => {
            return Math.floor(Math.random() * arrayName.length)
        }
        /**
         * Random bg color
         */
        const getRandomBgColor = computed(() => {
            const ranIdxBg = randomIndex(bg)
            const randIdxOpacity = randomIndex(opacity)
            return `${bg[ranIdxBg]}-${opacity[randIdxOpacity]}`
        })

        return { getRandomBgColor }
    },
}
</script>
