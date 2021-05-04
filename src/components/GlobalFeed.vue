<template>
  <div class="global__feed-main"></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'feed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },

  methods: {
    ...mapActions({
      getArticles: 'GET_ARTICLES'
    })
  },

  mounted() {
    this.getArticles(this.apiUrl)
  }
}
</script>

<style lang="scss" scoped></style>
