import { ref } from 'vue'
import { projectAuth } from '@/firebase/config.js'
import {
    createUserWithEmailAndPassword,
    // signOut,
    signInWithEmailAndPassword,
    // onAuthStateChanged
    updateProfile
} from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true
    try {
        const res = await signInWithEmailAndPassword(projectAuth, email, password)
        error.value = null
        isPending.value = false
        console.log(res)
        return res
    }
    catch(err){
        error.value = 'incorrect login credentials'
        isPending.value = false
        console.log(err.message)
    }
}

const useLogin = () => {
    return { error, login, isPending }
}

export { useLogin }