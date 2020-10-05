<template>
	<button class="white-button_container" :style="styles">
		<nuxt-link class="white-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "WhiteButton",
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
.white-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	background-color: #ffffff;
	border-radius: 1em;
	border: none;
}

.white-button_link {
	font-size: var(--textSize);
	color: $green;
	font-weight: bold;
	text-decoration: none;
}
</style>
