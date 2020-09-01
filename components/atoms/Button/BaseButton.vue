<template>
  <button @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';

export default Vue.extend({
  name: "TextButton",
  methods: {
    clickHandler: () => {
      console.log('hi');
    }
  } 
})
</script>

<style scoped>
button {
  background-color: forestgreen;
}
</style>
