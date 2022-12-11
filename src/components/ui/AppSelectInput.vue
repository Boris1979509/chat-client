<template>
    <div>
        <div :class="inputBorderState" class="border-b-2 relative my-4">
            <select
                class="float-input block w-full appearance-none focus:outline-none bg-transparent"
                :id="name"
                :name="name"
                :value="modelValue"
                @change="change"
            >
                <!-- <option selected value="" disabled>
                    {{ $t('Choose') }}
                </option> -->
                <option
                    v-for="(option, idx) in options"
                    :key="idx"
                    :value="option.value"
                    v-text="option.label"
                    :class="[
                        option.image
                            ? `bg-auto bg-no-repeat bg-center w-full h-full bg-[image: '${option.image}']`
                            : '',
                    ]"
                ></option>
            </select>
            <label
                v-text="$t(label)"
                :class="{ 'is-invalid': errorMessage }"
                class="float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"
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
import { computed } from 'vue'
export default {
    name: 'AppSelectInput',
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
            required: true,
        },
        selected: {
            type: String,
        },
        options: Array,
        modelValue: {
            type: [String, Number],
        },
    },
    setup(props, { emit }) {
        const inputBorderState = computed(() => {
            return props.errorMessage
                ? 'border-red-300 focus-within:border-red-500'
                : 'border-gray-300 focus-within:border-blue-500'
        })
        const change = (event) => {
            emit('update:modelValue', event.target.value)
        }
        const isSelected = (value) => {
            console.log(value)
            return value === 'RU' ? 'selected' : ''
        }
        return { change, inputBorderState, isSelected }
    },
}
</script>
