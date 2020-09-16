<template>
	<b-input v-model="variable" />
</template>

<script>
export default {
	name: "BaseInput",
	data() {
		return {
			variable: 0,
		};
	},
};
</script>
