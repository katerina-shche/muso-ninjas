import { ref } from 'vue'
import { projectAuth } from '@/firebase/config.js'
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    // onAuthStateChanged
    updateProfile
} from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
    error.value = null
    isPending.value = true
    try {
        console.log(projectAuth.currentUser)
        await signOut(projectAuth)
        isPending.value = false
        console.log('user logged out')
        console.log(projectAuth.currentUser)
    }
    catch(err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useLogout = () => {
    return { logout, error, isPending }
}

export { useLogout }