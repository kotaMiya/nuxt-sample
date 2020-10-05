<template>
	<header>
		<base-image url="#" />
		<p-text>無料登録 【厚生労働省】職業紹介事業許可番号()</p-text>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default Vue.extend({
	name: "NoNavHeader",
	components: {
		BaseImage,
		PText,
	},
});
</script>

<style lang="scss" scoped>
header {
	height: 100px;
	display: flex;
	font-size: 1.2em;
}
</style>
