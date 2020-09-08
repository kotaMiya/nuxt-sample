<template>
  <footer>
    <static-links />
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import StaticLinks from '@/components/molecules/StaticLinks.vue';

export default Vue.extend({
  name: "Footer",
  components: {
    StaticLinks
  }
})
</script>

<style scoped>
footer {
  background-color: coral;
  height: 300px;
}
</style>
