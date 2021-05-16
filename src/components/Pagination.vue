<template>
  <div>
    <p>pagination</p>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
