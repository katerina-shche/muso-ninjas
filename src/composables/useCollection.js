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

    const projectAddDoc = async (doc) => {
        error.value = null

        try {
            await addDoc(collection(projectFirestore, collectionName), doc)

        } catch(err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }

    }
    return { error, projectAddDoc }
}

export { useCollection }