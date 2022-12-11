<template>
    <div class="relative">
        <Multiselect
            class="float-input block w-full appearance-none focus:outline-none bg-transparent"
            v-model="modelValue"
            :options="options"
            :loading="loading"
            placeholder=" "
            label="name"
            :classes="{ container }"
            @change="change"
        >
            <template v-slot:singlelabel="{ value }">
                <div class="w-full py-2 px-3 flex items-center gap-2">
                    <img class="w-10 h-full" :src="value.image" />
                    <div>{{ value.name }}</div>
                </div>
            </template>

            <template v-slot:option="{ option }">
                <img class="w-10 h-full" :src="option.image" />
                <div class="ml-2">{{ option.name }}</div>
            </template>
        </Multiselect>
        <label
            v-text="$t(label)"
            :class="{ 'is-invalid': errorMessage }"
            class="float-label -z-1 text-gray-500 absolute top-0 duration-300 origin-0"
        ></label>
        <div
            class="mt-1 text-xs text-red-500"
            v-if="errorMessage"
            v-text="errorMessage"
        ></div>
    </div>
</template>

<script>
import { computed } from 'vue'
import Multiselect from '@vueform/multiselect'
export default {
    name: 'CountrySelect',
    emits: ['update:modelValue'],
    props: {
        errorMessage: {
            type: String,
            default: null,
        },
        loading: { type: Boolean },
        modelValue: {
            type: [String, Number],
        },
        options: {
            type: Array,
        },
        label: {
            type: String,
            default: null,
        },
    },
    setup(props, { emit }) {
        const change = (value) => {
            emit('update:modelValue', value)
        }
        const CONTAINER_CLASSES = [
            'relative',
            'mx-auto',
            'w-full',
            'flex',
            'items-center',
            'justify-end',
            'box-border',
            'cursor-pointer',
            'border-b-2',
            'bg-white',
            'leading-snug',
            'outline-none',
        ]

        const container = computed(() =>
            props.errorMessage
                ? [
                      'border-red-300 focus-within:border-red-500',
                      ...CONTAINER_CLASSES,
                  ]
                : [
                      'border-gray-300 focus-within:border-blue-500',
                      ...CONTAINER_CLASSES,
                  ]
        )
        return { change, container }
    },
    components: {
        Multiselect,
    },
}
</script>
