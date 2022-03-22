import router from '@/router'

export const authGuard = (store) => {
    const authRoutes = ['login', 'signup', 'forgot', 'firstLoginSettings']
    const settingsRoute = ['firstLoginSettings']
    router.beforeEach((to, from, next) => {
        /**
         * Скрыть страницы
         * для аутентифицированного пользователя
         */
        if (
            authRoutes.includes(to.name) &&
            store.state.auth.isLoggedIn &&
            store.getters['user/isUserInfo']
        ) {
            return next({ name: 'home' })
        }
        if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
            return next({ name: 'login' })
        }
        /**
         * Если осуществляется переход
         * незарегистрированного пользователя
         * на страницу /first-login
         */
        if (settingsRoute.includes(to.name) && !store.state.auth.isLoggedIn) {
            return next({ name: 'login' })
        }

        return next()
    })
}
