<template>
    <div class="w-full md:w-1/2 p-5">
        <div class="flex items-center pb-5">
            <app-icon icon="lock-open" class="w-6 h-6 text-gray-600" />
            <h2
                class="text-2xl font-bold text-gray-600"
                v-text="$t('Reset password')"
            ></h2>
        </div>
        <form @submit.prevent="onSubmit" class="space-y-8">
            <app-input
                :isActiveFocus="isActiveFocus"
                label="Email"
                type="email"
                name="email"
                v-model.trim="email"
                :error-message="errors.email"
            />
            <app-button :isButtonLoading="isButtonLoading">{{
                $t('Reset password')
            }}</app-button>
        </form>
        <div class="flex justify-between mt-5">
            <router-link
                :to="{ name: 'signup' }"
                class="text-sm hover:underline"
                v-text="$t('Signup')"
            ></router-link>
            <router-link
                :to="{ name: 'login' }"
                class="text-sm hover:underline"
                v-text="$t('Login')"
            ></router-link>
        </div>
    </div>
</template>

<script>
import { useAuthResetPassword } from '@/use/auth/reset.password'
export default {
    name: 'ForgotForm',
    setup() {
        return { ...useAuthResetPassword() }
    },
}
</script>
