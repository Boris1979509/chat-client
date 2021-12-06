import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth'
const auth = getAuth()

export default {
    /** Login */
    async firebaseLogin({ email, password }) {
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    /** Logout */
    async firebaseLogout() {
        try {
            return await signOut(auth)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    /** Sign up */
    async firebaseSignUp({ email, password }) {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    /** Reset password */
    async firebaseResetPassword(email) {
        try {
            return await sendPasswordResetEmail(auth, email)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    /** Get curren user id token */
    async getUserIdToken() {
        try {
            return await auth.currentUser.getIdToken()
        } catch (error) {
            return Promise.reject(error)
        }
    },
}
