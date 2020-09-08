<template>
  <img :src="url" :class="className">
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  url: string;
  className: string;
}

export default Vue.extend({
  name: 'JobImage',
  props: {
    url: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  }
})
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
