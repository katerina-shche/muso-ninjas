import { ref } from 'vue'
import { projectAuth } from '@/firebase/config.js'
import {
    createUserWithEmailAndPassword,
    // signOut,
    // signInWithEmailAndPassword,
    // onAuthStateChanged
    updateProfile
} from 'firebase/auth'

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null
    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password)
        if(!res) {
            throw new Error('Could not complete signup')
        }
        console.log(res.user)
        await updateProfile(projectAuth.currentUser, { displayName })
        console.log('displayName updated')
        error.value = null
        return res
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {
    return { error, signup }
}

export { useSignup } 