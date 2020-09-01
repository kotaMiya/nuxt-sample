<template>
  <div class="job-card">
    <job-card-header />
    <job-card-body />
    <job-card-footer />
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';
import JobCardHeader from '@/components/molecules/JobCardHeader.vue';
import JobCardBody from '@/components/molecules/JobCardBody.vue';
import JobCardFooter from '@/components/molecules/JobCardFooter.vue';

import axios from 'axios'

export default Vue.extend({
  name: "JobCard",
  components: {
    JobCardHeader,
    JobCardBody,
    JobCardFooter
  },
  mounted() {
    axios.get('http://localhost:3000/api/job')
      .then(res => {
        console.log(res);
      });
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
