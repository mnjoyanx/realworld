<template>
  <div class="feed-main">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <feed-wrapper />
        <tags :tags="allTags" :isLoading="isLoading" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'feed',
  components: {
    FeedWrapper: () => import('@/components/feed/FeedWrapper'),
    Tags: () => import('@/components/feed/Tags')
  },

  computed: {
    ...mapGetters(['allTags']),
    ...mapState({
      isLoading: state => state.feed.isLoading
    })
  },

  methods: {
    ...mapActions({
      getAllTags: 'GET_TAGS'
    })
  },

  mounted() {
    this.getAllTags()
  }
}
</script>

<style lang="scss" scoped></style>
