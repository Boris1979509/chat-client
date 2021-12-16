import store from '@/store'
import router from '@/router'
import { useI18n } from 'vue-i18n'

export const useAuthLogout = () => {
    const { t } = useI18n() // translate
    /** LOGOUT */
    const logout = async () => {
        await store.dispatch('auth/logout')
        router.push({ name: 'login' })
        store.dispatch(
            'setNotify',
            {
                type: 'success',
                message: t('Logout Message'),
            },
            { root: true }
        )
    }

    return { logout }
}
