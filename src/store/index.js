import { createStore } from 'vuex'
import authService from '@/services/firebase/auth.service'
import user from '@/store/modules/user'
import auth from '@/store/modules/auth'
import chat from '@/store/modules/chat'
import notify from '@/store/modules/notify'
import { authGuard } from '@/guards/auth.guards'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const store = createStore({
    modules: {
        user,
        auth,
        notify,
        chat,
    },
})
/** Auth User watch state */
const authUser = getAuth()
onAuthStateChanged(authUser, async (userData) => {
    /** if user not auth userData === null  */
    if (userData) {
        // const uid = userData.uid
        // Bearer token for headers
        const token = await authService.getUserIdToken() // Bearer token for headers
        localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN_KEY, token)
    } else {
        localStorage.removeItem(import.meta.env.VITE_AUTH_TOKEN_KEY)
    }
    await store.dispatch('setLoggedIn', !!userData)
    await store.dispatch('setUserState', userData)
})

authGuard(store)

export default store
