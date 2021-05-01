<template>
  <div>
    <h2>This is Home page</h2>
    <div class="mt-4">
      <feed />
    </div>
  </div>
</template>

<script>
import Feed from '@/components/feed/Feed'
export default {
  name: 'home',
  components: {
    Feed
  }
}
</script>

<style lang="scss" scoped></style>
