import {
    isToday,
    differenceInDays,
    format,
    formatDistance,
    subDays,
} from 'date-fns'
import { ru } from 'date-fns/locale'
export default {
    passedTime(value) {
        if (!Number.isInteger(value)) {
            return
        }
        const date = new Date(value)
        const today = new Date()
        const diff = differenceInDays(new Date(), date)

        let result = ''
        if (isToday(date)) {
            result = format(date, 'HH:mm')
        } else {
            //result = `${diff} days ago.`
            if (diff > 0) {
                result = formatDistance(subDays(today, diff), today, {
                    addSuffix: true,
                    locale: ru,
                })
            } else {
                result = 'Вчера'
            }
        }
        return result
    },
    /**
     * Get only first char to uppercase
     * @param {string} str
     * @returns {string}
     */
    firstChar(str) {
        return str.charAt(0).toUpperCase()
    },
    /**
     *
     * @param {string} str
     * @returns {string}
     */
    ucFirst(str) {
        if (!str) return str
        return str[0].toUpperCase() + str.slice(1)
    },
}
