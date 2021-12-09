import store from '@/store'
import router from '@/router'

const setAuthToken = (config) => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
    config.headers['Authorization'] = `Bearer ${token}`
    return config
}

export const myInterceptor = (axios) => {
    axios.interceptors.request.use(setAuthToken)
    axios.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            if (error.response.status === 401) {
                await store.dispatch('auth/logout')
                router.push({ name: 'login' })
            } else if (error.response.status === 404) {
                router.push({ name: 'notFound' })
            }
            return Promise.reject(error)
        }
    )
}
