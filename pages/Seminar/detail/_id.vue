<template>
	<div class="seminar-id_container">
		<seminar-detail-head />
		<seminar-detail-body />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import SeminarDetailHead from "@/components/organisms/Seminar/SeminarDetailHead.vue";
import SeminarDetailBody from "@/components/organisms/Seminar/SeminarDetailBody.vue";
import PText from "@/components/atoms/Text/PText.vue";
import { ISeminar } from "@/types/interfaces";

export default Vue.extend({
	name: "seminar-detail",
	components: {
		SeminarDetailHead,
		SeminarDetailBody,
	},
	data() {
		return {
			seminar: {},
		};
	},
	async asyncData({ app, error, params }) {
		try {
			const res = app.$axios.get<ISeminar>(`http://localhost:3000/api/seminar`);
			console.log(res);
			return {
				seminar: res,
			};
		} catch (err) {
			error({
				statusCode: err.response.status,
				message: err.response.message,
			});
		}
	},
	mounted() {
		console.log(this.seminar);
	},
});
</script>

<style lang="scss" scoped>
.seminar-id_container {
	width: 80%;
	margin: 10px auto;
}
</style>
