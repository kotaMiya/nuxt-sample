<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  className: string;
}

export default Vue.extend({
  name: "TextButton",
  props: {
    className: {
      type: String
    }
  }
})
</script>

<style scoped>
button {
  background-color: forestgreen;
}
</style>
