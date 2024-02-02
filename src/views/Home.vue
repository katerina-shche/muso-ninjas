<template>
  <div class="home">
   <p>Homepage</p>
   <div v-if="error" class="error"> Could not fetch the data</div>
   <div v-else>
      <ListView :playlists="documents" />
   </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { getCollection } from '@/composables/getCollection'
import { projectFirestore } from '@/firebase/config'
import ListView from '@/components/ListView.vue'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { documents, error } = getCollection('playlists')

    return { documents, error }
  }
}
</script>
