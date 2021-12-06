<template>
    <div class="w-full md:w-1/2 p-5">
        <div class="flex items-center pb-5">
            <app-icon icon="lock-open" class="w-6 h-6 text-gray-600" />
            <h2
                class="text-2xl font-bold text-gray-600"
                v-text="$t('Signup')"
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
            <app-input
                label="Password"
                type="password"
                name="password"
                v-model.trim="password"
                :error-message="errors.password"
            />
            <app-input
                label="Confirm password"
                name="password_confirmation"
                type="password"
                v-model.trim="password_confirmation"
                :error-message="errors.password_confirmation"
            />
            <app-checkbox-input v-model="agree" name="agree">
                {{ $t('Agree') }}
            </app-checkbox-input>
            <app-button :isButtonLoading="isButtonLoading">{{
                $t('Signup')
            }}</app-button>
        </form>
        <div class="flex justify-between mt-5">
            <router-link
                :to="{ name: 'forgot' }"
                class="text-sm hover:underline"
                v-text="$t('Forgot')"
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
import { useAuthSignup } from '@/use/auth/signup'
export default {
    name: 'SignupForm',
    setup() {
        return { ...useAuthSignup() }
    },
}
</script>
