
import { projectStorage } from '@/firebase/config.js'
import { ref as storeRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'
import { getUser } from '@/composables/getUser'

const { user } = getUser()

const useStorage = () => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        filePath.value = `covers/${user.value.uid}/${file.name}`
        const storageRef = storeRef(projectStorage, filePath.value)

        try {
            const res = await uploadBytes(storageRef, file)
                console.log('Uploaded a blob or file!');
                console.log(res)
                url.value = await getDownloadURL(res.ref)
              
        } catch(err) {
            console.log(err.message)
            error.value = err.message
        }
    }

    return { url, filePath, error, uploadImage }
}

export { useStorage }