<template>
  <nuxt-link :class="className" :to="location">
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  className: string;
  location: string;
}

export default Vue.extend({
  name: "TextLink",
  props: {
    className: {
      type: String
    }, 
    location: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.text-link {
  background-color: gold;
}
</style>
