<template>
	<div class="text-link_container">
		<nuxt-link :class="className" :to="location">
			<slot></slot>
		</nuxt-link>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "TextLink",
	data() {
		return {
			stateClass: "" as string,
		};
	},
	props: {
		className: {
			type: String,
		},
		location: {
			type: String,
			required: true,
		},
		textColor: {
			type: String,
			required: true,
		},
		textSize: {
			type: String,
			required: true,
		},
	},
	created() {
		this.stateClass = "text-link_link" + this.$props.className;
	},
});
</script>

<style lang="scss" scoped>
.text-link_container > a {
	--textColor: $black;
	--textSize: 1em;
	color: var(--textColor);
	font-size: var(--textSize);
	text-decoration: none;
}
</style>
