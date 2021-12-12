import { inject } from 'vue'
export const useUserIsOnline = () => {
    const allUsersOnline = inject('all-users-online')

    /** is user online */
    const isOnline = (userId) => {
        return allUsersOnline.value.some((item) => item === userId)
    }
    return { isOnline }
}
