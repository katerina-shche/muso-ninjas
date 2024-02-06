import { ref, watchEffect } from 'vue'
import { projectFirestore } from "@/firebase/config"
import {
    //getFirestore, 
    collection, 
    //getDocs,
    onSnapshot,
    addDoc, 
    //deleteDoc, 
    doc,
    query,
    //where,
    orderBy,
    //serverTimestamp,
    //getDoc, updateDoc
} from 'firebase/firestore'

const getDocument = (collectionName, id) => {
    const document = ref(null)
    const error = ref(null)

    let docRef = doc(projectFirestore, collectionName, id)
    
    const unsubDoc = onSnapshot(docRef, (doc) => {
        if(doc.data()) {
        document.value = { ...doc.data(), id: doc.id}
        error.value = null
        console.log(document.value)
        } else {
            error.value = 'that document does not exist'
        }
        
}, (err) => {
    console.log(err.message)
    error.value = 'could not fetch data'
})

watchEffect((onInvalidate) => {
    //unsub from onSnapshot document when watcher is stopped (component unmounted)
    onInvalidate(() => {
        unsubDoc()
    })
})

return { document, error }
}

export { getDocument }