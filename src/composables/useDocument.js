import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";
import {
    //getFirestore, 
    //collection, 
    //getDocs,
    //onSnapshot,
    //addDoc, 
    deleteDoc, doc,
    //query, where,
    //orderBy, serverTimestamp,
    //getDoc, updateDoc
} from 'firebase/firestore'

const useDocument = (collectionName, id) => {
    const error = ref(null)
    const isPending = ref(false)

    let docRef = doc(projectFirestore, collectionName, id)

    const deleteDocument = async () => {
        error.value = null
        isPending.value = true

        try {
            //deleteDoc returns a promise with info about succes/not but it does not contain any data obj to use
            await deleteDoc(docRef)
            isPending.value = false
        } catch (err) {
            console.log(err.message)
            isPending.value = false
            error.value = 'could not delete the document'
        }
    }

    return { error, isPending, deleteDocument }
}

export { useDocument }