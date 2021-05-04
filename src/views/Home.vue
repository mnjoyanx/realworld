<template>
  <div>
    <h2>This is Home page</h2>
    <div class="mt-4">
      <div class="container mx-auto">
        <div class="flex justify-between">
          <global-feed :api-url="apiUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalFeed from '@/components/GlobalFeed'
export default {
  name: 'home',
  components: {
    GlobalFeed
  },
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

<style lang="scss" scoped></style>
