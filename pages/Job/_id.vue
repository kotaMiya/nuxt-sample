<template>
  <div class="main-body">
    <detail-search />
    求人詳細
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DetailSearch from '@/components/organisms/DetailSearch.vue';
import Job from '@/models/Job';

export default Vue.extend({
  name: "Job",
  components: {
    DetailSearch
  }
})
</script>
