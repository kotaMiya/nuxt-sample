<template>
	<button class="disabled-button_container" :style="styles">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "DisabledButton",
	props: {
		location: {
			type: String,
			required: true,
		},
		btnWidth: {
			type: String,
			required: true,
		},
		btnHeight: {
			type: String,
			required: true,
		},
		textSize: {
			type: String,
			required: true,
		},
	},
	computed: {
		styles() {
			return {
				"--btnWidth": this.btnWidth,
				"--btnHeight": this.btnHeight,
				"--textSize": this.textSize,
			};
		},
	},
});
</script>

<style lang="scss" scoped>
.disabled-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	font-size: var(--textSize);
	background-color: $gray;
	color: $white;
	font-weight: bold;
	border-radius: 1em;
	border: none;
}
</style>
