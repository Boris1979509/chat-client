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
            result = formatDistance(subDays(today, diff), today, {
                addSuffix: true,
                locale: ru,
            })
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
}
