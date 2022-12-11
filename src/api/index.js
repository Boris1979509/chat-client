import axios from 'axios'

export default {
    createInstance(settings) {
        return axios.create({ ...settings })
    },
    async getAllCountries(params) {
        const baseURL = import.meta.env.VITE_API_RESTCOUNTRIES
        return this.createInstance({ baseURL }).get(params)
    },
}
