import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import router from '@/router'
import { useI18n } from 'vue-i18n'

export const useAuthSignup = () => {
    const { t } = useI18n() // translate
    const store = useStore()
    const isButtonLoading = computed(
        () => store.getters['auth/isProgressStatusAuth']
    )
    const isActiveFocus = ref(true)
    const agree = ref(true)
    const PASSWORD_MIN_LENGTH = 6

    const validationSchema = yup.object({
        email: yup
            .string()
            .required(t('Required', { name: 'Email' }))
            .email(t('Valid email')),
        password: yup
            .string()
            .required(t('Required', { name: t('Password') }))
            .min(
                PASSWORD_MIN_LENGTH,
                t('Min', { name: t('Password'), min: PASSWORD_MIN_LENGTH })
            ),
        password_confirmation: yup
            .string()
            .required(t('Required', { name: t('Confirm password') }))
            .oneOf([yup.ref('password')], t('Passwords must match')),
    })

    const { errors, handleSubmit } = useForm({
        validationSchema,
    })

    const { value: password } = useField('password')
    const { value: email } = useField('email')
    const { value: password_confirmation } = useField('password_confirmation')

    const onSubmit = handleSubmit(async (data) => {
        if (!agree.value) return
        await store.dispatch('auth/signup', { ...data, t })
    })
    store.watch(
        (_, getters) => getters['auth/isNewUser'],
        (value) => {
            if (value) router.push({ name: 'firstLoginSettings' })
        }
    )
    return {
        onSubmit,
        agree,
        email,
        password,
        password_confirmation,
        errors,
        isActiveFocus,
        isButtonLoading,
    }
}
