<template>
	<div>
		<p>
			<slot></slot>
		</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "PText",
});
</script>
