<template>
  <div>
      <logo />
      <left-page />
      <right-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Logo from '@/components/Logo.vue';
import LeftPage from '@/components/organisms/LeftPage.vue';
import RightPage from '@/components/organisms/RightPage.vue';

@Component({
  components: {
    Logo,
    LeftPage,
    RightPage
  }
})

export default class Index extends Vue {}
</script>
