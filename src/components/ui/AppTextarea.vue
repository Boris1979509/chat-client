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
        :value="modelValue"
        @input="change"
        placeholder="Write Something"
    ></textarea>
</template>

<script>
export default {
    name: 'AppTextarea',
    emits: ['update:modelValue'],
    props: {
        modelValue: String,
    },
    setup(_, { emit }) {
        const change = (event) => {
            emit('update:modelValue', event.target.value)
        }
        return { change }
    },
}
</script>
