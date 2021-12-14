import {
    // isToday,
    // differenceInDays,
    formatRelative,
    // format,
    // formatDistance,
    // isYesterday,
    // subDays,
} from 'date-fns'
import { ru } from 'date-fns/locale'
export default {
    passedTime(value) {
        if (!Number.isInteger(value)) {
            return
        }
        const date = new Date(value)
        // const today = new Date()
        // const diff = differenceInDays(new Date(), date)

        const formatRelativeLocale = {
            lastWeek: "'На прошлой неделе'",
            yesterday: "'Вчера в' HH.mm",
            today: "'Сегодня в' HH.mm",
            tomorrow: "''",
            nextWeek: "''",
            other: 'dd.MM.yyyy',
        }
        // let result = ''
        // if (isToday(date)) {
        //     result = format(date, 'HH:mm')
        // } else if (isYesterday(date)) {
        //     result = formatRelative(date, baseDate, [options])
        // } else {
        //     //result = `${diff} days ago.`
        //     if (diff > 0) {
        //         result = formatDistance(subDays(today, diff), today, {
        //             addSuffix: true,
        //             locale: ru,
        //         })
        //     }
        // }
        const locale = {
            ...ru,
            formatRelative: (token) => formatRelativeLocale[token],
        }
        return formatRelative(date, new Date(), { locale })
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
