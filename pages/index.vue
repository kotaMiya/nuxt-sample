<template>
	<div class="main-body">
		<hero />
		<past-company-list />
		<who-we-are />
		<chosen-reason />
		<user-voice />
		<service-flow />
		<adviser />
		<search-company />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/organisms/Top/Hero.vue";
import PastCompanyList from "@/components/organisms/Top/PastCompanyList.vue";
import WhoWeAre from "@/components/organisms/Top/WhoWeAre.vue";
import ChosenReason from "@/components/organisms/Top/ChosenReason.vue";
import UserVoice from "@/components/organisms/Top/UserVoice.vue";
import ServiceFlow from "@/components/organisms/Top/ServiceFlow.vue";
import Adviser from "@/components/organisms/Top/Adviser.vue";
import SearchCompany from "@/components/organisms/Top/SearchCompany.vue";

export default Vue.extend({
	name: "Top",
	components: {
		Hero,
		PastCompanyList,
		WhoWeAre,
		ChosenReason,
		UserVoice,
		ServiceFlow,
		Adviser,
		SearchCompany,
	},
	props: {},
	data() {
		return {};
	},
	computed: {},
});
</script>

<style lang="scss" scoped>
.main-body {
	justify-content: space-around;
}
</style>
