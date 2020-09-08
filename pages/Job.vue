<template>
  <div class="main-body">
    <detail-search />
    求人詳細
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DetailSearch from '@/components/organisms/DetailSearch.vue';
import Job from '@/models/Job';

export default ({
  name: "Job",
  components: {
    DetailSearch
  }
})
</script>
