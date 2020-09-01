<template>
  <div class="main-body">
    <detail-search />
    <job-card :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, reactive, onMounted } from "@vue/composition-api";
import JobCard from '@/components/organisms/JobCard.vue';
import DetailSearch from '@/components/organisms/DetailSearch.vue';
import axios from 'axios';

type Job = {
  id: number;
  title: string;
}

type Jobs = {
  jobs: Job[];
}

const getJobsFromApi = () => {
  let jobs: any  = ref('test');

  const getJobs = () => {
    axios.get('http://localhost:3000/api/job')
      .then(res => (jobs.value = res.data));
  }

  onMounted(() => {
    getJobs();
  })

  return {
    jobs,
    getJobs
  }
}

export default defineComponent({
  name: "Index",
  components: {
    JobCard,
    DetailSearch
  },
  setup() {
    const jobs = getJobsFromApi();
    
    return {
      jobs
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
