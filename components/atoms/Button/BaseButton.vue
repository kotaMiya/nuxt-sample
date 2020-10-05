<template>
	<button :class="className">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "TextButton",
	props: {
		className: {
			type: String,
		},
	},
});
</script>

<style lang="scss" scoped>
button {
	background-color: #fb670e;
}
</style>
