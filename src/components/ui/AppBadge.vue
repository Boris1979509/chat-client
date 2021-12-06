<template>
    <span :class="[...classes, ...activeClass]" v-text="label"></span>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'AppBadge',
    props: {
        label: {
            type: [String, Number],
            required: true,
        },
        type: {
            type: String,
            default: 'primary',
            validate(value) {
                return [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].includes(value)
            },
        },
    },
    setup(props) {
        const classes = [
            'px-2',
            'py-1',
            'text-xs',
            'font-medium',
            'tracking-wide',
            'rounded-full',
            'text-white',
        ]
        const map = {
            primary: ['bg-indigo-400'],
            success: ['bg-green-400'],
            danger: ['bg-red-400'],
        }
        const activeClass = computed(() => map[props.type])
        return { classes, activeClass }
    },
}
</script>
