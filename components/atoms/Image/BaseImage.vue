<template>
	<img :src="url" :class="className" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "BaseImage",
	props: {
		url: {
			type: String,
			required: true,
		},
		className: {
			type: String,
		},
	},
});
</script>

<style lang="scss" scoped></style>
