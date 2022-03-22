import mutations from '@/store/mutations'
import authService from '@/services/firebase/auth.service'
const { IS_LOGGED_IN, IS_PROGRESS_STATUS_AUTH, IS_NEW_USER } = mutations
export default {
    namespaced: true,
    state: {
        isLoggedIn: !!localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY),
        isProgressStatusAuth: false,
        isNewUser: false,
    },
    getters: {
        isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
        isProgressStatusAuth: ({ isProgressStatusAuth }) =>
            isProgressStatusAuth,
        isNewUser: ({ isLoggedIn }) => isLoggedIn,
    },
    mutations: {
        [IS_LOGGED_IN](state, bool) {
            state.isLoggedIn = bool
        },
        [IS_PROGRESS_STATUS_AUTH](state, bool) {
            state.isProgressStatusAuth = bool
        },
        [IS_NEW_USER](state, bool) {
            state.isNewUser = bool
        },
    },
    actions: {
        setLoggedIn: {
            root: true,
            handler({ commit }, bool) {
                commit(IS_LOGGED_IN, bool)
            },
        },
        /** Login */
        async login({ commit, dispatch }, { email, password, t }) {
            try {
                commit(IS_PROGRESS_STATUS_AUTH, true)
                await authService.firebaseLogin({ email, password })
            } catch (error) {
                dispatch(
                    'setNotify',
                    {
                        type: 'error',
                        message: t(error.message),
                    },
                    { root: true }
                )
            } finally {
                commit(IS_PROGRESS_STATUS_AUTH, false)
            }
        },
        /** Logout */
        async logout({ commit }) {
            try {
                await authService.firebaseLogout()
            } catch (error) {
                console.log(error.message)
            }
        },
        /** Register */
        async signup({ commit, dispatch }, { email, password, t }) {
            try {
                commit(IS_PROGRESS_STATUS_AUTH, true)
                await authService.firebaseSignUp({
                    email,
                    password,
                })
            } catch (error) {
                dispatch(
                    'setNotify',
                    { type: 'error', message: t(error.message) },
                    { root: true }
                )
            } finally {
                commit(IS_PROGRESS_STATUS_AUTH, false)
            }
        },
        /** Reset password */
        async resetPassword({ commit, dispatch }, { email, t }) {
            try {
                commit(IS_PROGRESS_STATUS_AUTH, true)
                await authService.firebaseResetPassword(email)
                dispatch(
                    'setNotify',
                    {
                        type: 'info',
                        message: t('Instructions reset password'),
                    },
                    { root: true }
                )
            } catch (error) {
                dispatch(
                    'setNotify',
                    { type: 'error', message: t(error.message) },
                    { root: true }
                )
            } finally {
                commit(IS_PROGRESS_STATUS_AUTH, false)
            }
        },
    },
}
