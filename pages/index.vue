<template>
  <div class="main-body">
    <detail-search />
    <job-card :jobs="jobs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, reactive, onMounted, toRefs, onServerPrefetch } from "@vue/composition-api";
import JobCard from '@/components/organisms/JobCard.vue';
import DetailSearch from '@/components/organisms/DetailSearch.vue';
import Job from '@/models/Job';
import axios from 'axios';

const getJobsFromApi = () => {
  let jobs = ref<Job[]>([]);

  const getJobs = () => {
    axios.get<Job[]>('http://localhost:3000/api/job')
      .then(res => {
        jobs.value = res.data;
      });
  }

  onMounted(async () => {
    await getJobs();
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
    const jobs = ref();   
    onServerPrefetch(async () => {
      jobs.value = await axios.get<Job[]>('http://localhost:3000/api/job')
        .then(res => {
          return res.data;
        });
    })

    console.log('index', jobs);
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
