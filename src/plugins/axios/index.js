import axios from 'axios'
import { myInterceptor } from '@/plugins/axios/interceptors'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
myInterceptor(instance)
export default instance
