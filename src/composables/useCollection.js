import { ref } from 'vue'
import { projectFirestore } from "@/firebase/config"
import {
    //getFirestore, 
    collection, 
    //getDocs,
    //onSnapshot,
    addDoc, 
    //deleteDoc, doc,
    //query, where,
    //orderBy, serverTimestamp,
    //getDoc, updateDoc
} from 'firebase/firestore'

const useCollection = (collectionName) => {
    const error = ref('null')
    const isPending = ref(false)

    const projectAddDoc = async (doc) => {
        error.value = null
        isPending.value = true

        try {
            await addDoc(collection(projectFirestore, collectionName), doc)
            isPending.value = false

        } catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
            isPending.value = false
        }

    }
    return { error, projectAddDoc, isPending }
}

export { useCollection }