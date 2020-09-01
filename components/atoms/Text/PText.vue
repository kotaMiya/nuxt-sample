<template>
  <p :class="className">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';

type Props = {
  className: string;
}

export default defineComponent({
  name: "PText",
  props: {
    className: {
      type: String,
    }
  },
  setup(props: Props) {
    props.className;
  } 
})
</script>
