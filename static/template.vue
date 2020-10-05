<template>
	<div class="main-body">
		<hero />
		{{ test }}
		{{ greeting }}
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/organisms/Top/Hero.vue";

export default Vue.extend({
	name: "Template",
	components: {
		Hero,
	},
	props: {},
	data() {
		return {};
	},
	computed: {
		test: () => {
			return "test";
		},
		greeting: () => {
			return "Hello World!";
		},
	},
	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {},
	updated() {},
	activated() {},
	deactivated() {},
	beforeDestroy() {},
	destroyed() {},
});
</script>

<style lang="scss" scoped>
.main-body {
	display: flex;
}
</style>
