<template>
	<div class="offer-search_container">
		<detail-search />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import DetailSearch from "@/components/organisms/DetailSearch.vue";
import PText from "@/components/atoms/Text/PText.vue";
import { IJob } from "@/types/interfaces";

export default Vue.extend({
	name: "offer-search",
	components: {
		DetailSearch,
	},
	data() {
		return {
			jobs: [] as IJob[],
		};
	},
});
</script>

<style lang="scss" scoped>
.offer-search_container {
	display: flex;
	justify-content: space-around;
}
</style>
