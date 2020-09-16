import BaseInput from "@/components/atoms/Input/BaseInput.vue";

export default {
	title: "MyStory",
	component: {
		BaseInput,
	},
};

export const Mytest = () => ({
	components: { BaseInput },
	template: "<base-input />",
});
