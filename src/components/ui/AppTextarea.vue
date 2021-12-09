<template>
    <textarea
        class="
            w-full
            focus:outline-none focus:placeholder-gray-400
            text-gray-600
            placeholder-gray-600
            bg-gray-200
            rounded-lg
            p-3
            resize-none
        "
        ref="root"
        :value="modelValue"
        @input="change"
        :placeholder="$t('Write Something')"
    ></textarea>
</template>

<script>
import { onMounted, ref, onUpdated } from 'vue'
export default {
    name: 'AppTextarea',
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
        isFocus: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const root = ref(null)
        const change = (event) => {
            emit('update:modelValue', event.target.value)
        }

        const setFocus = () => {
            if (props.isFocus) root.value.focus()
        }

        onMounted(() => {
            setFocus()
        })
        onUpdated(() => {
            setFocus()
        })
        return { change, root }
    },
}
</script>
