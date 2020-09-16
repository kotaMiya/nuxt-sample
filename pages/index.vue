<template>
	<div class="main-body">
		<detail-search />
		<job-card :jobs="jobs" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import JobCard from "@/components/organisms/JobCard.vue";
import DetailSearch from "@/components/organisms/DetailSearch.vue";
import Job from "@/models/Job";

export default Vue.extend({
	name: "Index",
	components: {
		JobCard,
		DetailSearch,
	},
	data() {
		return {
			jobs: [] as Job[],
		};
	},
	async asyncData({ app, error }) {
		try {
			const res = await app.$axios.get<Job[]>("http://localhost:3000/api/job");
			return {
				jobs: res.data,
			};
		} catch (err) {
			error({
				statusCode: err.response.status,
				message: err.response.message,
			});
		}
	},
});
</script>

<style lang="scss" scoped>
.main-body {
	display: flex;
	justify-content: space-around;
}
</style>
