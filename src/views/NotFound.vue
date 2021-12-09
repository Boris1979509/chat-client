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
import { useSetTitle } from '@/use/setTitle'
export default {
    name: 'NotFound',
    setup() {
        useSetTitle()
    },
}
</script>
