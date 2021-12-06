import { nextTick } from 'vue'
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
            title: 'Forgot password',
        },
        component: () => import('@/views/Forgot.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        meta: {
            layout: 'auth',
            title: 'Sign up',
        },
        component: () => import('@/views/SignUp.vue'),
    },
    {
        path: '/first-login',
        name: 'firstLoginSettings',
        meta: {
            layout: 'auth',
            title: 'First login',
        },
        component: () => import('@/views/FirstLoginSettings.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach(async (to) => {
    await nextTick(() => {
        document.title = to.meta.title ?? import.meta.env.VITE_APP_NAME
    })
})

export default router
