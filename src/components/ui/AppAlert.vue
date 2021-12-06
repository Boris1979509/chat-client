<template>
    <div class="alert" :class="['alert-' + type]" role="alert">
        <div class="flex gap-2 flex-wrap">
            <app-icon :icon="alert.icon" class="h-6 w-6 text-teal" />
            <div class="font-bold" v-text="$t(alert.title)"></div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'AppAlert',
    props: {
        type: {
            type: String,
            required: true,
            validator(value) {
                return ['error', 'success', 'info', 'warning'].includes(value)
            },
        },
    },
    setup(props) {
        const alertMap = {
            error: {
                title: 'Alert label error',
                icon: 'exclamation-circle',
            },
            success: {
                title: 'Alert label success',
                icon: 'check',
            },
            info: {
                title: 'Alert label info',
                icon: 'information-circle',
            },
            warning: {
                title: 'Alert label warning',
                icon: 'information-circle',
            },
        }
        const alert = ref(alertMap[props.type])
        return { alert }
    },
}
</script>
