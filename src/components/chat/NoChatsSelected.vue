<template>
    <div class="h-screen flex items-center justify-center">
        <div class="container">
            <app-alert type="info">{{ $t('No chats selected') }}</app-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoChatsSelected',
}
</script>
