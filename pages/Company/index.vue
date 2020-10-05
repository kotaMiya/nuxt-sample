<template>
	<div class="company_container">
		<detail-search />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import DetailSearch from "@/components/organisms/DetailSearch.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default Vue.extend({
	name: "company",
	components: {
		DetailSearch,
	},
});
</script>

<style lang="scss" scoped>
.main-body {
	display: flex;
	justify-content: space-around;
}
</style>
