<template>
	<div class="top-past-company-list">
		<ul class="top-company-list">
			<li v-for="companyImage in companyImages" :key="companyImage.name">
				<base-image :url="companyImage.path" class="top-company-list-img" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";

export default Vue.extend({
	name: "PastCompanyList",
	data() {
		return {
			companyImages: [
				{
					name: "sansan",
					path: require("@/assets/images/sansan.png"),
				},
				{
					name: "cybozu",
					path: require("@/assets/images/cybozu.png"),
				},
				{
					name: "sansan",
					path: require("@/assets/images/sansan.png"),
				},
				{
					name: "cybozu",
					path: require("@/assets/images/cybozu.png"),
				},
				{
					name: "sansan",
					path: require("@/assets/images/sansan.png"),
				},
				{
					name: "cybozu",
					path: require("@/assets/images/cybozu.png"),
				},
				{
					name: "sansan",
					path: require("@/assets/images/sansan.png"),
				},
				{
					name: "cybozu",
					path: require("@/assets/images/cybozu.png"),
				},
				{
					name: "sansan",
					path: require("@/assets/images/sansan.png"),
				},
				{
					name: "cybozu",
					path: require("@/assets/images/cybozu.png"),
				},
			],
		};
	},
});
</script>

<style lang="scss">
.top {
	&-past-company-list {
		background-color: #ffffff;
	}

	&-company-list {
		display: flex;

		&-img {
			height: 60px;
			width: 100px;
		}
	}

	&-company-list > li {
		list-style: none;
	}
}
</style>
