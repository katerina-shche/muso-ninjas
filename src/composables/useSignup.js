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
const isPending = ref(false)

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true
    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password)
        if(!res) {
            throw new Error('Could not complete signup')
        }
        console.log(res.user)
        await updateProfile(projectAuth.currentUser, { displayName })
        console.log('displayName updated')
        error.value = null
        isPending.value = false
        return res
    } catch(err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return { error, signup, isPending }
}

export { useSignup } 