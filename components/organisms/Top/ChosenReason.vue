<template>
	<div class="top-chosen_reason">
		<header-text size="h3">レバテックルーキーが選ばれる3つの理由</header-text>
		<reasons />
		<orange-button
			location="/entry/input"
			btnWidth="350px"
			btnHeight="60px"
			textSize="18px"
			>就活アドバイザーに相談してみる</orange-button
		>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import Reasons from "@/components/molecules/Lists/Reasons.vue";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import OrangeButton from "@/components/atoms/Button/OrangeButton.vue";

export default Vue.extend({
	name: "ChosenReason",
	components: {
		HeaderText,
		Reasons,
		TextLink,
		OrangeButton,
	},
});
</script>

<style lang="scss" scoped>
.top-chosen_reason {
	text-align: center;
	margin-bottom: 100px;
}
</style>
