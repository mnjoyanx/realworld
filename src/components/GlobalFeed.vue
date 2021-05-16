<template>
  <div class="global__feed-main w-full">
    <template v-if="isLoading">
      loading...
    </template>
    <template v-if="errors">
      errors
    </template>
    <template v-if="articles">
      <div v-for="item in articles.articles" :key="item.id" class="w-full">
        <div class="p-10">
          <div class="lg:max-w-full lg:flex">
            <div
              class="border-r border-b w-full border-l w-full border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="w-full flex justify-between">
                <router-link
                  :to="{
                    name: 'userProfile',
                    params: { username: item.author.username }
                  }"
                  class="flex items-center mb-4 cursor-pointer"
                >
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    :src="item.author.image"
                    alt="Avatar of Writer"
                  />

                  <div class="text-sm">
                    <p class="text-green-900 leading-none">
                      {{ item.author.username }}
                    </p>
                    <p>{{ item.createdAt }}</p>
                  </div>
                </router-link>
                <div
                  class="w-12 h-12 flex justify-center items-center border cursor-pointer"
                >
                  <p>{{ item.favoritesCount }} 💚</p>
                </div>
              </div>

              <div class="flex justify-between">
                <div>
                  <p class="text-sm text-gray-600 flex items-center"></p>
                  <router-link
                    :to="{ name: 'article', params: { slug: item.slug } }"
                    class="text-gray-900 text-xl mb-2 cursor-pointer post-content"
                  >
                    <p class=" font-bold">{{ item.title }}</p>
                    <p class="font-base">{{ item.description }}</p>
                  </router-link>
                  <p class="text-gray-700 text-base"></p>
                </div>
                <div>
                  <template v-if="item.tagList">
                    <div v-for="tag in item.tagList" :key="tag">
                      <p>{{ tag }}</p>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination />
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'feed',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      total: 500,
      limit: 10,
      perPage: 1
    }
  },

  components: {
    Pagination: () => import('@/components/Pagination')
  },

  computed: {
    ...mapState({
      articles: state => state.articles.articles,
      isLoading: state => state.articles.isLoading,
      errors: state => state.articles.errors
    })
  },

  methods: {
    ...mapActions({
      getArticles: 'articles/GET_ARTICLES'
    })
  },

  mounted() {
    this.getArticles(this.apiUrl)
  }
}
</script>

<style scoped>
.post-content {
  width: fit-content;
}
</style>
