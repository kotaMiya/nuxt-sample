<template>
  <div class="main-body">
    <detail-search />
    <job-card :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';;
import JobCard from '@/components/organisms/JobCard.vue';
import DetailSearch from '@/components/organisms/DetailSearch.vue';
import Job from '@/models/Job';
import axios from 'axios';

export default Vue.extend({
  name: "Index",
  components: {
    JobCard,
    DetailSearch
  },
  data() {
    return {
      jobs: []
    }
  },
  async asyncData() {
    const res = await axios.get<Job[]>('http://localhost:3000/api/job');
    return {
      jobs: res.data
    }
  }
})
</script>

<style lang="scss" scoped>
.main-body {
  display: flex;
  justify-content: space-around;
}
</style>
