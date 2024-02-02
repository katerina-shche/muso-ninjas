<template>
    <div v-for="playlist in playlists" :key="playlist.id">
        <div class="single">
            <div class="thumbnail">
                <img :src="playlist.coverUrl" alt="cover">
            </div>
            <div class="info">
                <h3>{{ playlist.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['playlists']
    }
</script>