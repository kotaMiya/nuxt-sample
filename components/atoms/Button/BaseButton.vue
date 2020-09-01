<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

type Props = {
  className: string;
}

export default defineComponent({
  name: "TextButton",
  props: {
    className: {
      type: String
    }
  },
  setup(props: Props) {
    props.className;
  }
})
</script>

<style scoped>
button {
  background-color: forestgreen;
}
</style>
