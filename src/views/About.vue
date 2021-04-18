<template>
    <h2>
        This is About page {{hello}}
    </h2>
</template>

<script>
    export default {
        name: 'about',
        computed: {
            hello() {
                console.log(this.$store.state)
                return this.$store.state.currentUser
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>