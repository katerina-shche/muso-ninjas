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

const logout = async () => {
    error.value = null
    try {
        console.log(projectAuth.currentUser)
        await signOut(projectAuth)
        console.log('user logged out')
        console.log(projectAuth.currentUser)
    }
    catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export { useLogout }