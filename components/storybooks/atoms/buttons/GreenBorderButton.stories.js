import { storiesOf } from "@storybook/vue";
import GreenBorderButton from "@/components/atoms/Button/GreenBorderButton.vue";

storiesOf("atoms/buttons", module).add("green border button", () => ({
	components: { GreenBorderButton },
	data() {
		return {
			btnType: "button",
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<green-border-button
			:btnType="btnType"
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</green-border-button
		>
	`,
}));
