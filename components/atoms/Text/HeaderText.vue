<template>
  <component :is="size" :class="className">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';

type Props = {
  className: string;
  size: string;
}

export default defineComponent({
  name: "HeaderText",
  props: {
    className: {
      type: String,
    },
    size: {
      type: String,
      required: true
    } 
  },
  setup(props: Props) {
    props.className;
    props.size; 
  } 
})
</script>
