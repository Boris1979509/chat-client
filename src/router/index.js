import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home',
        },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            layout: 'auth',
            title: 'Login',
        },
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/forgot',
        name: 'forgot',
        meta: {
            layout: 'auth',
            title: 'Reset password',
        },
        component: () => import('@/views/Forgot.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        meta: {
            layout: 'auth',
            title: 'Signup',
        },
        component: () => import('@/views/SignUp.vue'),
    },
    {
        path: '/first-login',
        name: 'firstLoginSettings',
        meta: {
            layout: 'auth',
            title: 'Settings',
        },
        component: () => import('@/views/FirstLoginSettings.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            title: '404 - Page not found',
        },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// router.afterEach(async (to) => {
//     await nextTick(() => {
//         document.title = to.meta.title ?? import.meta.env.VITE_APP_NAME
//     })
// })

export default router
