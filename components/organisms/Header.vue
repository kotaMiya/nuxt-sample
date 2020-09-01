<template>
  <header>
    <text-link location="/">レバテックルーキー</text-link>
    <text-link location="search">企業を探す</text-link>
    <text-link location="knowhow">就活ノウハウ</text-link>
  </header>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import TextLink from '@/components/atoms/Link/TextLink.vue';

export default Vue.extend({
  name: "Header",
  components: {
    TextLink
  }
})
</script>

<style scoped>
header {
  background-color: aquamarine;
  height: 100px;
}
</style>
