<template>
    <div class="h-screen flex items-center">
        <div class="container">
            <app-alert type="error">
                {{ $t('NotFound') }}
                <router-link to="/" class="underline">{{
                    $t('Home')
                }}</router-link>
            </app-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>
