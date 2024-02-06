<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="isPending" disabled>Loading</button>
        <button v-if="!isPending">Log in</button>
       
</form>
</template>

<script>
    import { useLogin } from '@/composables/useLogin'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        setup() {
            const { error, login, isPending } = useLogin()

            const email = ref('')
            const password = ref('')
            const router = useRouter()
            

            const handleSubmit = async () => {
                
                console.log(email.value, password.value)
                const res = await login(email.value, password.value)
                if (!error.value) {
                    console.log('logged in succesfully')
                    email.value = ''
                    password.value = ''
                    router.push({ name: 'Home'})
                } else {
                    console.log(error.value)
                }
               
            }


            return { email, password, handleSubmit, error, isPending }
        }
    }
</script>