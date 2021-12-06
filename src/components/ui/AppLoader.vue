<template>
    <div class="absolute inset-0 flex justify-center items-center">
        <div
            class="
                loader
                ease-linear
                rounded-full
                border-gray-200
                animate-spin
                border-4 border-t-4
                h-12
                w-12
            "
        ></div>
    </div>
</template>

<script>
export default {
    name: 'AppLoader',
}
</script>
