<template>
	<div class="text-with-title_container">
		<header-text />
		<p-text />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default Vue.extend({
	name: "TextWithTitle",
	components: {
		HeaderText,
		PText,
	},
});
</script>

<style lang="sass" scoped>
.text-with-title_container {

}
</style>
