<template>
  <div>
    
    <div>
      <navbar />
    </div>

    {{ getStoreItem }}

    <router-link :to="{ name: 'home' }" class="bg-blue-500">home</router-link>
    <router-link :to="{ name: 'about' }" class="bg-red-500">about</router-link>
    <router-view />
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

import Navbar from '@/components/partials/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  computed: {
    getStoreItem() {
      return this.$store.state.auth.first
    }
  },

   methods: {
            ...mapActions(['GET_CURRENT_USER']),
        },
        created() {
            this.GET_CURRENT_USER()
        }
}
</script>

<style></style>
