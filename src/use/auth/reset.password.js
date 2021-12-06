import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export const useAuthResetPassword = () => {
    const { t } = useI18n() // translate
    const store = useStore()
    const isButtonLoading = computed(
        () => store.getters['auth/isProgressStatusAuth']
    )
    const isActiveFocus = ref(true)

    const validationSchema = yup.object({
        email: yup
            .string()
            .required(t('Required', { name: 'Email' }))
            .email(t('Valid email')),
    })

    const { errors, handleSubmit, resetForm } = useForm({
        validationSchema,
    })

    const { value: email } = useField('email')

    const onSubmit = handleSubmit(async (data) => {
        await store.dispatch('auth/resetPassword', { ...data, t })
        resetForm()
    })

    return { onSubmit, email, errors, isActiveFocus, isButtonLoading }
}
