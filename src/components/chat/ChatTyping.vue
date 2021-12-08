<template>
    <div class="flex gap-1">
        <app-typing-loader />
        <div class="text-sm text-blue-400">
            {{ userTypingName }} {{ $t('typing') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatTyping',
    props: {
        userTypingName: String,
    },
}
</script>
