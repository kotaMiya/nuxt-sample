<template>
	<button class="square-button_container" :style="styles">
		<nuxt-link class="square-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "SquareButton",
	props: {
		location: {
			type: String,
			required: true,
		},
		btnColor: {
			type: String,
			required: true,
		},
		textColor: {
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
				"--btnColor": this.btnColor,
				"--textColor": this.textColor,
				"--btnWidth": this.btnWidth,
				"--btnHeight": this.btnHeight,
				"--textSize": this.textSize,
			};
		},
	},
});
</script>

<style lang="scss" scoped>
.white-button_container {
	color: var(--btnColor);
	width: var(--btnWidth);
	height: var(--btnHeight);
	border-radius: 1em;
	border: none;
}

.white-button_link {
	font-size: var(--textSize);
	color: var(--textSize);
	color: $green;
	font-weight: bold;
	text-decoration: none;
}
</style>
