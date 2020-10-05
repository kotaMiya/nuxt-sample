<template>
	<div class="entry-body">
		<p-text>プロフィールをご入力ください。</p-text>
		<entry-form :prefData="prefectures" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import PText from "@/components/atoms/Text/PText.vue";
import EntryForm from "@/components/organisms/Entry/EntryForm.vue";

type Prefectures = {
	id: number;
	name: string;
};

export default Vue.extend({
	name: "EntryInput",
	layout: "entry",
	components: {
		EntryForm,
	},
	data() {
		return {
			prefectures: [] as Prefectures[],
		};
	},
	async asyncData({ app, error }) {
		try {
			const res = await app.$axios.get<Prefectures[]>(
				"http://localhost:3000/api/prefectures"
			);
			return {
				prefectures: res.data.map((d) => {
					return {
						id: d.id,
						value: d.name,
					};
				}),
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

<style lang="scss" scoped></style>
