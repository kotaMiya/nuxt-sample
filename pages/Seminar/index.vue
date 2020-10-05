<template>
	<div class="seminar_container">
		<detail-search />
		<div class="seminar_cards">
			<seminar-card-list :seminars="seminars" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import DetailSearch from "@/components/organisms/DetailSearch.vue";
import PText from "@/components/atoms/Text/PText.vue";
import SeminarCardList from "@/components/organisms/Seminar/SeminarCardList.vue";
import { ISeminar } from "@/types/interfaces";

export default Vue.extend({
	name: "Seminar",
	components: {
		SeminarCardList,
		DetailSearch,
	},
	data() {
		return {
			seminars: [] as ISeminar[],
		};
	},
	async asyncData({ app, error }) {
		try {
			const res = await app.$axios.get<ISeminar[]>(
				"http://localhost:3000/api/seminars"
			);
			return {
				seminars: res.data,
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
.seminar_container {
	display: flex;
	justify-content: center;
}

.seminar_cards > div {
	margin-bottom: 40px;
	margin-left: 100px;
}
</style>
