<template>
	<div class="orange-link_container">
		<nuxt-link class="orange-link_link" :to="location">
			<slot></slot>
		</nuxt-link>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "TextLink",
	props: {
		location: {
			type: String,
			required: true,
		},
		textSize: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.orange-link_container {
	background-color: $orange;
	--textSize: 1.2em;
	font-size: var(--textSize);
}
</style>
