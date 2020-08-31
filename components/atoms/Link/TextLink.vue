<template>
  <nuxt-link :to="location">{{ name }}</nuxt-link>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    location: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
})
</script>
