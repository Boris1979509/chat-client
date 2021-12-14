<template>
    <div class="relative text-gray-600 focus-within:text-gray-400 grow-1">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <app-icon icon="search" class="w-5 h-5" />
        </span>
        <input
            :aria-placeholder="$t('Search')"
            :placeholder="$t('Search')"
            class="py-2 pr-2 pl-10 block w-full rounded-lg outline-none focus:text-gray-700 focus:outline-none focus:placeholder-gray-300 placeholder-gray-400 bg-gray-100"
            type="search"
            name="search"
            autocomplete="search"
            :value="modelValue"
            @input="change"
        />
    </div>
</template>

<script>
export default {
    name: 'AppSearch',
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
