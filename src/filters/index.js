import { isToday, differenceInDays, format } from 'date-fns'
export default {
    passedTime(value) {
        if (!Number.isInteger(value)) {
            return
        }
        const date = new Date(value)
        const today = new Date()
        const diff = differenceInDays(today, date)

        let result = ''
        if (isToday(date)) {
            result = format(date, 'HH:mm')
        } else {
            result = `${diff} days ago.`
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
