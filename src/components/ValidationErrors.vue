<template>
  <div>
    <ul class="ml-8 my-2 pr-3">
        <li v-for="(item, key) in validationErr" :key="key">
            <p class="text-red-500">{{ item }}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    validationErr: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>