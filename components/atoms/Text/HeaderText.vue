<template>
  <component :is="size" :class="className">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderText",
  props: {
    className: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
  },
});
</script>
