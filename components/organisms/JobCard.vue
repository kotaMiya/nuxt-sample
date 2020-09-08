<template>
  <div>
    <div class="job-card" v-for="job in jobs" :key="job.id">
      <job-card-header :id="job.id" :title="job.title" />
      <job-card-body />
      <job-card-footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import JobCardHeader from '@/components/molecules/JobCardHeader.vue';
import JobCardBody from '@/components/molecules/JobCardBody.vue';
import JobCardFooter from '@/components/molecules/JobCardFooter.vue';
import Job from '@/models/Job';
import axios from 'axios';

export default Vue.extend({
  name: "JobCard",
  components: {
    JobCardHeader,
    JobCardBody,
    JobCardFooter
  },
  props: {
    jobs: { type: Array } as PropOptions<Job[]>,
    default: () => {
      [
        {
          'id': 1,
          'title': 'Test Title'
        }
      ]
    } 
  } 
})
</script>

<style lang="scss" scoped>
.job-card {
  width: 770px;
  height: 580px;
  background-color: grey;
  margin: 30px 0;
}
</style>
