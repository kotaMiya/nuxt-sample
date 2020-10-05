<template>
	<button :type="type" class="green-border-button_container" :style="styles">
		<nuxt-link v-if="isLink" class="green-border-button_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "GreenBorderButton",
	props: {
		btnType: {
			type: String,
			required: true,
		},
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
		isLink() {
			return this.btnType == "button" ? true : false;
		},
	},
});
</script>

<style lang="scss" scoped>
.green-border-button_container {
	width: var(--btnWidth);
	height: var(--btnHeight);
	background-color: #ffffff;
	border-radius: 1em;
	border-color: $green;
}

.green-border-button_link {
	font-size: var(--textSize);
	color: $green;
	font-weight: bold;
	text-decoration: none;
}
</style>
