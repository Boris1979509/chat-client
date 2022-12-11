<template>
    <div class="w-full md:w-1/2 p-5">
        <div class="flex items-center pb-5">
            <app-icon icon="cog" class="w-6 h-6" />
            <h2>{{ $t('General data') }}</h2>
        </div>
        <form @submit.prevent="onSubmit" class="space-y-8">
            <app-input
                :isActiveFocus="isActiveFocus"
                label="Username"
                name="username"
                v-model.trim="username"
                :error-message="errors.username"
            />
            <app-select-input
                label="Age"
                name="age"
                :options="OPTIONS"
                v-model="age"
                :error-message="errors.age"
            />
            <country-select
                v-model="country"
                label="Country"
                :options="countries"
                :error-message="errors.country"
                :loading="loading"
            />
            <div class="flex flex-wrap gap-3">
                <app-radio-input
                    name="gender"
                    v-model="gender"
                    :checked="true"
                    id="male"
                    value="male"
                    >{{ $t('Male') }}</app-radio-input
                >
                <app-radio-input
                    name="gender"
                    v-model="gender"
                    id="female"
                    value="female"
                    >{{ $t('Female') }}</app-radio-input
                >
            </div>
            <app-button :isButtonLoading="isButtonLoading">{{
                $t('Save')
            }}</app-button>
        </form>
    </div>
</template>

<script>
import { useAuthFirstSettings } from '@/use/auth/first.settings'
import CountrySelect from '@/components/plugins/multiselect/CountrySelect.vue'

export default {
    name: 'FirstLoginSettingsForm',
    setup() {
        return { ...useAuthFirstSettings() }
    },
    components: {
        CountrySelect,
    },
}
</script>
