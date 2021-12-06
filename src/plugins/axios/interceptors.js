const setAuthToken = (config) => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
    config.headers['Authorization'] = `Bearer ${token}`
    return config
}

export const myInterceptor = (axios) => {
    axios.interceptors.request.use(setAuthToken)
    // axios.interceptors.response.use(
    //     (response) => {
    //         return response.data
    //     },
    //     async (error) => {
    //         if (error.response.status === 401) {
    //             store.dispatch('auth/logout')
    //             await router.push({ name: 'auth.login' })
    //         } else if (error.response.status === 404) {
    //             await router.push({ name: 'notFound' })
    //         }
    //         return Promise.reject(error)
    //     }
    // )
}
