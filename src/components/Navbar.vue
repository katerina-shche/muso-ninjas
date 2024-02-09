<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/ninja.png" alt="ninja-logo">
            <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
            <div class="links">
                <div v-if='user'>
                    <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
                    <router-link :to="{ name: 'UserPlaylists' }">My Playlists</router-link>
                    <span>Hi here, {{ user.displayName }}</span>
                    <button @click.prevent="handleClick">Logout</button>
                </div>
                <div v-else>
                    <router-link v-if='!user' class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
                    <router-link v-if='!user' class="btn" :to="{ name: 'Login' }">Log in</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { useLogout } from '@/composables/useLogout'
    import { getUser } from '@/composables/getUser'
    

    export default {
        setup() {
            const { logout, error } = useLogout()
            const { user } = getUser()
            const router = useRouter()

            const handleClick = async () => {
                console.log('trying to logout')
                await logout()
                if(!error.value) {
                    console.log('user loged out')
                    router.push({ name: 'Login' })
                }
            }

            return { handleClick, user }
        }
    }
</script>

<style scoped>
    .navbar {
        padding: 16px 10px;
        margin-bottom: 60px;
        background: white;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
    }
    nav h1 {
        margin-left: 20px;
    }
    nav .links {
        margin-left: auto;
    }
    nav .links a, button {
        margin-left: 16px;
        font-size: 14px;
    }
    nav img {
        max-height: 60px;
    }
    span {
        font-size: 14px;
        display: inline-block;
        margin-left: 16px;
        padding-left: 16px;
        border-left: 1px solid #eee;
    }
</style>