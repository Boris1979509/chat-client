import mutations from '@/store/mutations'
import axios from '@/plugins/axios'
const {
    SET_PUBLIC,
    SELECT_CHAT_ID,
    CURRENT_CHAT,
    CURRENT_CHAT_MESSAGES,
    ADD_MESSAGE,
    IS_PROGRESS_STATUS_MESSAGES,
    IS_PROGRESS_STATUS_SELECTED_CHAT,
} = mutations
export default {
    namespaced: true,
    state: {
        publicChat: [],
        selectedChatId: '',
        currentChat: null,
        currentChatMessages: [],
        isProgressStatusMessages: true,
        isProgressStatusSelectedChat: true,
    },
    getters: {
        publicChat: ({ publicChat }) => publicChat,
        selectedChatId: ({ selectedChatId }) => selectedChatId,
        currentChat: ({ currentChat }) => currentChat,
        currentChatMessages: ({ currentChatMessages }) => currentChatMessages,
        isProgressStatusMessages: ({ isProgressStatusMessages }) =>
            isProgressStatusMessages,
        isProgressStatusSelectedChat: ({ isProgressStatusSelectedChat }) =>
            isProgressStatusSelectedChat,
    },
    mutations: {
        [SET_PUBLIC](state, arr) {
            state.publicChat = arr
        },
        [SELECT_CHAT_ID](state, str) {
            state.selectedChatId = str
        },
        [CURRENT_CHAT](state, obj) {
            state.currentChat = obj
        },
        [CURRENT_CHAT_MESSAGES](state, arr) {
            state.currentChatMessages = arr
        },
        [ADD_MESSAGE](state, msg) {
            state.currentChatMessages.push(msg)
        },
        [IS_PROGRESS_STATUS_MESSAGES](state, bool) {
            state.isProgressStatusMessages = bool
        },
        [IS_PROGRESS_STATUS_SELECTED_CHAT](state, bool) {
            state.isProgressStatusSelectedChat = bool
        },
    },
    actions: {
        async getPublicChats({ commit }) {
            try {
                const response = await axios.get('/chats/public')
                commit(SET_PUBLIC, response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async selectChat({ commit, dispatch }, id) {
            commit(SELECT_CHAT_ID, id)
            await dispatch('getSelectedChat', id)
            await dispatch('getSelectedChatMessages', id)
        },
        async getSelectedChat({ commit }, id) {
            try {
                commit(IS_PROGRESS_STATUS_SELECTED_CHAT, true)
                const response = await axios.get('/chats/' + id)
                commit(CURRENT_CHAT, response.data)
            } catch (error) {
                console.log(error)
            } finally {
                commit(IS_PROGRESS_STATUS_SELECTED_CHAT, false)
            }
        },
        async getSelectedChatMessages({ commit }, id) {
            try {
                commit(IS_PROGRESS_STATUS_MESSAGES, true)
                const response = await axios.get('/messages/chat/' + id)
                commit(CURRENT_CHAT_MESSAGES, response.data)
            } catch (error) {
                console.log(error)
            } finally {
                commit(IS_PROGRESS_STATUS_MESSAGES, false)
            }
        },
        addMessage({ commit }, msg) {
            commit(ADD_MESSAGE, msg)
        },
    },
}
