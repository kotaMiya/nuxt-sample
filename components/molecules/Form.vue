<template>
  <form>
    <base-input />
    <text-button />
  </form>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import BaseInput from '@/components/atoms/Input.vue';
import TextButton from '@/components/atoms/Button/TextButton.vue';

export default Vue.extend({
  name: "Form",
  components: {
    BaseInput,
    TextButton,
  }
})
</script>
