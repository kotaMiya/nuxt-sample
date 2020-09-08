<template>
  <div>
    <text-link location="/">home</text-link>
    <text-link location="search">search</text-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TextLink from '@/components/atoms/Link/TextLink.vue';

export default Vue.extend({
  name: "StaticLinks",
  components: {
    TextLink
  },
})
</script>
