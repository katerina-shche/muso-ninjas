<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" placeholder="Display name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button v-if="isPending" disabled>Loading</button>
        <button v-if="!isPending">Sign up</button>
       
</form>
</template>

<script>
    import { useSignup } from '@/composables/useSignup'
    import { ref } from 'vue'

    export default {
        setup() {
            const { error, signup, isPending } = useSignup()

            const displayName = ref('')
            const email = ref('')
            const password = ref('')
            

            const handleSubmit = async () => {
                
                console.log(email.value, password.value)
                const res = await signup(email.value, password.value, displayName.value)
                if (!error.value) {
                    console.log('user signed up')
                } else {
                    console.log(error.value)
                }
               
            }


            return { email, password, displayName, handleSubmit, error, isPending }
        }
    }
</script>