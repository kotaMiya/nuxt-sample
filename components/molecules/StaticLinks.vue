<template>
  <div>
    <Link location="about" name="About" />
    <Link location="search" name="Search" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import Link from '@/components/atoms/Link/TextLink.vue';

export default Vue.extend({
  name: "StaticLinks",
  components: {
    Link
  },
})
</script>
