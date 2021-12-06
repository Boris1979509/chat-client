import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import router from '@/router'
import { useI18n } from 'vue-i18n'

export const useAuthLogin = () => {
    const { t } = useI18n() // translate
    const store = useStore()
    const isButtonLoading = computed(
        () => store.getters['auth/isProgressStatusAuth']
    )
    const isActiveFocus = ref(true)
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
    })

    const { errors, handleSubmit, resetForm } = useForm({
        validationSchema,
    })

    const { value: password } = useField('password')
    const { value: email } = useField('email')

    const onSubmit = handleSubmit(async (data) => {
        await store.dispatch('auth/login', { ...data, t })
    })

    const isLoggedIn = () => {
        router.push({ name: 'home' })
        store.dispatch(
            'setNotify',
            {
                type: 'success',
                message: t('Successful login message'),
            },
            { root: true }
        )
    }
    store.watch(
        (_, getters) => getters['auth/isLoggedIn'],
        (value) => {
            if (value) isLoggedIn()
        }
    )
    return { onSubmit, email, password, errors, isActiveFocus, isButtonLoading }
}
