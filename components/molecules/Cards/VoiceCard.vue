<template>
	<div class="voice-card_container">
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
import { IUserVoice } from "@/types/interfaces";

export default Vue.extend({
	name: "VoiceCard",
	components: {
		PText,
		BaseImage,
	},
	props: {
		userVoice: {
			type: Object as PropType<IUserVoice>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.voice-card_container {
	width: 650px;
	height: 300px;
}
</style>
