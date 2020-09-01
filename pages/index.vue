<template>
  <div class="main-body">
    <detail-search />
    <job-card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import JobCard from '@/components/organisms/JobCard.vue';
import DetailSearch from '@/components/organisms/DetailSearch.vue';
@Component({
  components: {
    JobCard,
    DetailSearch
  }
})

export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.main-body {
  display: flex;
  justify-content: space-around;
}
</style>
