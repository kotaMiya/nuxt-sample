<template>
	<div class="flow_container">
		<ul>
			<li v-for="flow in flows" :key="flow.name">
				<base-image :url="flow.imgUrll" />
				<p-text>{{ flow.description }}</p-text>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default Vue.extend({
	name: "Flow",
	components: {
		BaseImage,
		PText,
	},
	data() {
		return {
			flows: [
				{
					name: "登録",
					imgUrl: "",
					description: "",
				},
				{
					name: "相談",
					imgUrl: "",
					description: "",
				},
				{
					name: "企業紹介",
					imgUrl: "",
					description: "",
				},
				{
					name: "面接",
					imgUrl: "",
					description: "",
				},
				{
					name: "内定獲得",
					imgUrl: "",
					description: "",
				},
			],
		};
	},
});
</script>

<style lang="scss" scoped>
.flow_container {
}
</style>
