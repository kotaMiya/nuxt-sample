<template>
	<button class="orange-button_container" :style="styles">
		<nuxt-link class="orange-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "OrangeButton",
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
			console.log(this.btnHeight);
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
.orange-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	background-color: $orange;
	border-radius: 1em;
	border: none;
}

.orange-button_link {
	font-size: var(--textSize);
	color: $white;
	font-weight: bold;
	text-decoration: none;
}
</style>
