<template>
	<div class="offer-card-list_container">
		<job-card v-for="offer in offers" :offer="offer" :key="offer.id" />
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import JobCard from "@/components/molecules/Cards/JobCard.vue";
import { IJob } from "@/types/interfaces";

export default Vue.extend({
	name: "JobCardList",
	components: {
		JobCard,
	},
	data() {
		return {
			offerUrl: "" as string,
		};
	},
	props: {
		jobs: {
			type: Array as PropType<IJob[]>,
		},
	},
});
</script>

<style lang="scss">
.offer-card-list_container > div {
	margin-bottom: 30px;
}
</style>
