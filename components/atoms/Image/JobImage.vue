<template>
  <img :src="url" :class="className">
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

type Props = {
  url: string;
  className: string;
}

export default defineComponent({
  name: 'JobImage',
  props: {
    url: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  setup(props: Props) {
    props.url;
    props.className;
  }
})
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
