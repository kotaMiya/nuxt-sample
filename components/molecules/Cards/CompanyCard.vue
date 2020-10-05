<template>
	<div class="company-card_container">
		<base-image :url="userVoice.imgUrl" />
		<p-text>{{ userVoice.name }}</p-text>
		<p-text>{{ userVoice.company }}</p-text>
		<p-text>{{ userVoice.title }}</p-text>
		<p-text>{{ userVoice.description }}</p-text>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import PText from "@/components/atoms/Text/PText.vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";

export default Vue.extend({
	name: "CompanyCard",
	components: {
		PText,
		BaseImage,
	},
	props: {},
});
</script>

<style lang="scss" scoped>
.company-card_container {
	width: 650px;
	height: 300px;
	background-color: $white;
}
</style>
