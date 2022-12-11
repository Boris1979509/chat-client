import { ref, onMounted } from 'vue'
import api from '@/api'

export const useCountries = () => {
    const lang = 'rus'
    const selected = 'RU'
    const fields = ['cca2', 'translations', 'flags']
    const countries = ref(null)
    const loading = ref(true)

    const SortArray = (a, b) => a.name.localeCompare(b.name)
    const getData = async () => {
        try {
            const params = fields.length
                ? 'all/?fields=' + fields.join(',')
                : 'all'
            const arr = await api.getAllCountries(params)
            countries.value = arr.data
                .map((country) => ({
                    value: country.cca2,
                    name: country.translations[lang].common,
                    image: country.flags.svg,
                }))
                .sort(SortArray)
        } catch (errors) {
        } finally {
            loading.value = false
        }
    }
    onMounted(() => getData())
    return { countries, selected, loading }
}
