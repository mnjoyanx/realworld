<template>
  <nav
    class="relative select-none bg-indigo-600 lg:flex lg:items-stretch w-full"
  >
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div>
          <router-link :to="{ name: 'home' }" tag="p" class="text-white text-2xl">Home</router-link>
        </div>
        <div class="flex justify-between flex-no-shrink items-center h-12">
          <router-link
            tag="p"
            class="text-white text-lg ml-4 cursor-pointer" 
            v-for="route in routes"
            :key="route.id"
            :to="{ name: route.name }"
            >{{ route.title }}</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      routes: [
        { id: 0, name: 'login', title: 'Sign In' },
        { id: 1, name: 'register', title: 'Sing Up' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
