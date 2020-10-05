<template>
	<button class="red-border-button_container" :style="styles">
		<nuxt-link class="red-border-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";
import "@/assets/scss/variables.scss";

export default Vue.extend({
	name: "RedBorderButton",
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
.red-border-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	background-color: #ffffff;
	border-radius: 1em;
	border-color: $red;
}

.red-border-button_link {
	font-size: var(--textSize);
	color: $red;
	font-weight: bold;
	text-decoration: none;
}
</style>
