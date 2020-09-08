<template>
  <p :class="className">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  className: string;
}

export default Vue.extend({
  name: "PText",
  props: {
    className: {
      type: String,
    }
  }
})
</script>
