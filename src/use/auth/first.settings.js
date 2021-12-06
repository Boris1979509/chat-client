import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import router from '@/router'
import { useI18n } from 'vue-i18n'

export const useAuthFirstSettings = () => {
    const { t } = useI18n() // translate
    const store = useStore()
    const isButtonLoading = computed(
        () => store.getters['user/isProgressStatusAuth']
    )
    const isActiveFocus = ref(true)
    const USER_NAME_MAX_LENGTH = 20

    /** Age 18-99 */
    const OPTIONS = []

    const AGE_FROM = 18
    const AGE_UP_TO = 99

    for (let i = AGE_FROM; i <= AGE_UP_TO; i++) {
        OPTIONS.push({ value: i, label: i })
    }
    /** */

    const validationSchema = yup.object({
        username: yup
            .string()
            .required(t('Required', { name: t('Username') }))
            .max(
                USER_NAME_MAX_LENGTH,
                t('Max', { name: t('Username'), max: USER_NAME_MAX_LENGTH })
            ),
        age: yup.string().required(t('Required', { name: t('Age') })),
        gender: yup.string().required(t('Required', { name: t('Gender') })),
    })

    const { errors, handleSubmit, resetForm } = useForm({
        validationSchema,
    })

    const { value: username } = useField('username')
    const { value: age } = useField('age')
    const { value: gender } = useField('gender')

    gender.value = 'male' // Default gender

    const onSubmit = handleSubmit(async (data) => {
        await store
            .dispatch('user/createUserInfo', data)
            .then(router.push({ name: 'home' }))
    })

    return {
        username,
        age,
        gender,
        OPTIONS,
        onSubmit,
        errors,
        isActiveFocus,
        isButtonLoading,
    }
}
