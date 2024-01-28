import { ref } from 'vue'
import { projectAuth } from '@/firebase/config.js'
import {
    //createUserWithEmailAndPassword,
    // signOut,
    //signInWithEmailAndPassword,
    onAuthStateChanged,
    //updateProfile
} from 'firebase/auth'

const user = ref(projectAuth.currentUser)

onAuthStateChanged(projectAuth, (_user) => {
    console.log('user state has changed, current user is: ', _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export { getUser }