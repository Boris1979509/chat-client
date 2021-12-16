<template>
    <div>
        <div :class="inputBorderState" class="border-b-2 relative my-4">
            <input
                class="float-input block w-full appearance-none focus:outline-none bg-transparent"
                :type="type"
                :name="name"
                :value="modelValue"
                @input="change"
                placeholder=" "
                ref="focus"
                :autocomplete="name"
            />
            <label
                v-text="$t(label)"
                :class="{ 'is-invalid': errorMessage }"
                class="float-label z-0 text-gray-500 absolute top-0 duration-300 origin-0"
            ></label>
        </div>
        <div
            class="-mt-3 text-xs text-red-500"
            v-if="errorMessage"
            v-text="errorMessage"
        ></div>
    </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'
export default {
    name: 'AppInput',
    emits: ['update:modelValue'],
    props: {
        errorMessage: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'text',
        },
        modelValue: {
            type: String,
        },
        isActiveFocus: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const focus = ref(null)
        const change = (event) => {
            emit('update:modelValue', event.target.value)
        }
        const inputBorderState = computed(() => {
            return props.errorMessage
                ? 'border-red-300 focus-within:border-red-500'
                : 'border-gray-300 focus-within:border-blue-500'
        })
        onMounted(() => {
            if (props.isActiveFocus) focus.value.focus()
        })
        return { change, focus, inputBorderState }
    },
}
</script>
