import { storiesOf } from "@storybook/vue";
import OrangeButton from "@/components/atoms/Button/OrangeButton.vue";

storiesOf("atoms/buttons", module).add("orange button", () => ({
	components: { OrangeButton },
	data() {
		return {
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<orange-button
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</orange-button
		>
	`,
}));
