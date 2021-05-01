<template>
  <div class="w-80 bg-gray-400">
    <p>tags</p>
    <div v-if="isLoading && !tags.length">
      loading...
    </div>
    <div class="flex flex-wrap" v-if="tags">
      <div
        v-for="tag in tags"
        :key="tag"
        class="flex-1 m-1 cursor-pointer p-2 rounded-full bg-white"
      >
        <p class="text-xs text-gray-500">{{ tag }}</p>
      </div>
    </div>
    <template v-if="!tags.length && !isLoading">
      <p>there is no tags yet.</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'tags',
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
