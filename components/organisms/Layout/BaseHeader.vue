<template>
	<header>
		<HeaderNav />
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderNav from "@/components/molecules/Navigations/HeaderNav.vue";

export default Vue.extend({
	name: "BaseHeader",
	components: {
		HeaderNav,
	},
});
</script>

<style lang="scss" scoped></style>
