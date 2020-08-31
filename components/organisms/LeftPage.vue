<template>
  <base-form />
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import BaseForm from '@/components/molecules/Form.vue';

export default Vue.extend({
  name: "LeftPage",
  components: {
    BaseForm
  }
})
</script>
