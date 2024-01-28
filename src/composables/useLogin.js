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

const login = async (email, password) => {
    error.value = null
    try {
        const res = await signInWithEmailAndPassword(projectAuth, email, password)
        error.value = null
        console.log(res)
        return res
    }
    catch(err){
        error.value = 'incorrect login credentials'
        console.log(err.message)
    }
}

const useLogin = () => {
    return { error, login }
}

export { useLogin }