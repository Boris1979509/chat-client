import router from '@/router'

export const authGuard = (store) => {
    const authRoutes = ['login', 'signup', 'forgot']
    router.beforeEach((to, from, next) => {
        /** If user is auth and route name login */
        if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
            return next({ name: 'home' })
        }
        if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
            return next({ name: 'login' })
        }
        return next()
    })
}
