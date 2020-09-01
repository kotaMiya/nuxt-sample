<template>
  <div class="job-card">
    <job-card-header id="1" title="title test" />
    <job-card-body />
    <job-card-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import JobCardHeader from '@/components/molecules/JobCardHeader.vue';
import JobCardBody from '@/components/molecules/JobCardBody.vue';
import JobCardFooter from '@/components/molecules/JobCardFooter.vue';

import axios from 'axios'

type Job = {
  job: object;
}

type Jobs = {
  jobs: Job[];
}

export default defineComponent({
  name: "JobCard",
  components: {
    JobCardHeader,
    JobCardBody,
    JobCardFooter
  },
  props: {
    jobs: {
      type: Object
    }
  },
  setup(props: Jobs) {
    props.jobs
    console.log("dkdkdk", props.jobs.jobs.value);
  }
})
</script>

<style scoped>
.job-card {
  width: 770px;
  height: 580px;
  background-color: grey;
}
</style>
