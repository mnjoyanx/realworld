<template>
  <nav
    class="relative select-none bg-indigo-600 lg:flex lg:items-stretch w-full"
  >
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div>
          <router-link
            :to="{ name: 'home' }"
            tag="p"
            class="text-white text-2xl"
            >Home</router-link
          >
        </div>
        <div class="flex justify-between flex-no-shrink items-center h-12">
          <template v-if="isLoggedIn">
            <router-link
              v-for="item in authenticatedRoutes"
              :key="item.id"
              :to="{ name: item.name }"
              tag="p"
              class="text-white text-lg mr-3 cursor-pointer"
            >
              {{ item.title }}
            </router-link>
            <router-link
              to="/current-user"
              tag="p"
              class="text-white text-lg cursor-pointer"
              >{{ currentUser.username }}</router-link
            >
          </template>
          <template v-else>
            <router-link
              tag="p"
              class="text-white text-lg ml-4 cursor-pointer"
              v-for="route in routes"
              :key="route.id"
              :to="{ name: route.name }"
              >{{ route.title }}</router-link
            >
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navbar',
  data() {
    return {
      routes: [
        { id: 0, name: 'login', title: 'Sign In' },
        { id: 1, name: 'register', title: 'Sing Up' }
      ],
      authenticatedRoutes: [
        { id: 1, name: 'new-article', title: 'New Article' },
        { id: 2, name: 'settings', title: 'Settings' }
      ]
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser'])
  }
}
</script>

<style lang="scss" scoped></style>
