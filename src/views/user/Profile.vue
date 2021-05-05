<template>
  <div>
    <p>user profile</p>
  </div>
</template>

<script>
export default {
  name: 'user-profile',
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss" scoped></style>
