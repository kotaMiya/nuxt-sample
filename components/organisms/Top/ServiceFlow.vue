<template>
	<div class="top-service_flow">
		<header-text size="h3">サービスの流れ</header-text>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";

export default Vue.extend({
	name: "ServiceFlow",
	components: {
		HeaderText,
	},
});
</script>

<style lang="scss" scoped>
.top-service_flow {
	text-align: center;
	margin-bottom: 100px;
}
</style>
