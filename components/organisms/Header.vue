<template>
  <header>
    <nuxt-link to="/">Header</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/search">Search</nuxt-link>
  </header>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';

export default Vue.extend({
  name: "Header"
})
</script>

<style scoped>
header {
  background-color: aquamarine;
  height: 100px;
}
</style>
