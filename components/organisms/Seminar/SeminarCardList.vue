<template>
	<div class="seminar-card-list_container">
		<seminar-card
			v-for="seminar in seminars"
			:seminar="seminar"
			:key="seminar.id"
		/>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import SeminarCard from "@/components/molecules/Cards/SeminarCard.vue";
import { ISeminar } from "@/types/interfaces";

export default Vue.extend({
	name: "SeminarCardList",
	components: {
		SeminarCard,
	},
	data() {
		return {
			seminarUrl: "" as string,
		};
	},
	props: {
		seminars: {
			type: Array as PropType<ISeminar[]>,
		},
	},
});
</script>

<style lang="scss">
.seminar-card-list_container > div {
	margin-bottom: 30px;
}
</style>
