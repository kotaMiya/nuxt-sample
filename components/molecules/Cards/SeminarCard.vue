<template>
	<div class="seminar-card_container">
		<text-link :location="seminarUrl">{{ seminar.title }}</text-link>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import { ISeminar } from "@/types/interfaces";

export default Vue.extend({
	name: "SeminarCard",
	components: {
		TextLink,
	},
	data() {
		return {
			seminarUrl: "" as string,
		};
	},
	props: {
		seminar: {
			type: Object as PropType<ISeminar>,
			required: true,
		},
	},
	created() {
		this.seminarUrl = "/seminar/detail/" + this.$props.seminar.id;
	},
});
</script>

<style lang="scss">
.seminar-card_container {
	height: 200px;
	width: 700px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

	&:hover {
		box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
		transform: translateY(-4px);
	}
}
</style>
