import mutations from '@/store/mutations'
import axios from '@/plugins/axios'
const {
    SET_USER,
    IS_PROGRESS_STATUS_USER_INFO,
    IS_PROGRESS_STATUS_USERS_IN_CHAT,
    SET_USERS_IN_CURRENT_CHAT,
} = mutations
export default {
    namespaced: true,
    state: {
        user: null,
        allUsersInCurrentChat: null,
        isProgressStatusUserInfo: true,
        isProgressStatusUsersInChat: true,
        isUserInfo: false,
    },
    getters: {
        user: ({ user }) => user,
        isProgressStatusUserInfo: ({ isProgressStatusUserInfo }) =>
            isProgressStatusUserInfo,
        isProgressStatusUsersInChat: ({ isProgressStatusUsersInChat }) =>
            isProgressStatusUsersInChat,
        allUsersInCurrentChat: ({ allUsersInCurrentChat }) =>
            allUsersInCurrentChat,
        isUserInfo: ({ user }) => !!user,
    },
    mutations: {
        [SET_USER](state, obj) {
            state.user = obj
        },
        [IS_PROGRESS_STATUS_USER_INFO](state, bool) {
            state.isProgressStatusUserInfo = bool
        },
        [IS_PROGRESS_STATUS_USERS_IN_CHAT](state, bool) {
            state.isProgressStatusUsersInChat = bool
        },
        [SET_USERS_IN_CURRENT_CHAT](state, arr) {
            state.allUsersInCurrentChat = arr
        },
    },
    actions: {
        setUserState: {
            handler({ dispatch }, user) {
                if (user) dispatch('getUser', user.email)
            },
            root: true,
        },
        async getUser({ commit }, email) {
            try {
                const response = await axios.get(`/users/${email}`)
                commit(SET_USER, response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async createUserInfo({ commit }, data) {
            try {
                commit(IS_PROGRESS_STATUS_USER_INFO, true)
                const response = await axios.post('/users', data)
                commit(SET_USER, response.data)
            } catch (error) {
                console.log(error)
            } finally {
                commit(IS_PROGRESS_STATUS_USER_INFO, false)
            }
        },
        async getAllUsersInCurrentChat({ commit }, chatId) {
            try {
                commit(IS_PROGRESS_STATUS_USERS_IN_CHAT, true)
                const response = await axios.get('/users/chats/' + chatId)
                commit(SET_USERS_IN_CURRENT_CHAT, response.data)
            } catch (error) {
                console.log(error)
            } finally {
                commit(IS_PROGRESS_STATUS_USERS_IN_CHAT, false)
            }
        },
    },
}
