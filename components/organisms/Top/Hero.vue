<template>
	<div class="top-hero">
		<header-text size="h2">プロの情報で着実な一歩を</header-text>
		<p-text
			>あなたの成長、「市場価値」を最大限に高められる、ファーストキャリアを紹介します。</p-text
		>
		<orange-button
			location="/entry/input"
			btnWidth="290px"
			btnHeight="50px"
			textSize="17px"
			>まずは登録する</orange-button
		>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import PText from "@/components/atoms/Text/PText.vue";
import OrangeButton from "@/components/atoms/Button/OrangeButton.vue";

export default Vue.extend({
	name: "TopHero",
	components: {
		HeaderText,
		PText,
		OrangeButton,
	},
});
</script>

<style lang="scss" scoped>
.top {
	&-hero {
		height: 450px;
		background-image: url("../../../assets/images/heroImg.jpeg");
	}
}
</style>
