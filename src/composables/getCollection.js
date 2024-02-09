import { ref, watchEffect } from 'vue'
import { projectFirestore } from "@/firebase/config"
import {
    //getFirestore, 
    collection, 
    //getDocs,
    onSnapshot,
    addDoc, 
    //deleteDoc, doc,
    query,
    where,
    orderBy,
    //serverTimestamp,
    //getDoc, updateDoc
} from 'firebase/firestore'

const getCollection = (collectionName, queryArgs) => {
    const documents = ref(null)
    const error = ref(null)

    let colRef = collection(projectFirestore, collectionName)
    let orderedCol = query(colRef, orderBy('createdAt'))
    if(queryArgs) {
        orderedCol = query(orderedCol, where(...queryArgs))
    }
    const unsubCol = onSnapshot(orderedCol, (snapshot) => {
        console.log('snapshot!!!')
        let results = []
        snapshot.docs.forEach(doc => {
            //wait data go to server and timestamp be set properly
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
}, (err) => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch data'
})

watchEffect((onInvalidate) => {
    //unsub from onSnapshot collection than watcher is stopped (component unmounted)
    onInvalidate(() => {
        unsubCol()
    })
})

return { documents, error }
}

export { getCollection }