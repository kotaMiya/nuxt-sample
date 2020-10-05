<template>
	<button class="green-button_container" :style="styles">
		<nuxt-link class="green-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "GreenButton",
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
.green-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	background-color: $green;
	border-radius: 1em;
	border: none;
}

.green-button_link {
	font-size: var(--textSize);
	color: $white;
	font-weight: bold;
	text-decoration: none;
}
</style>
