import { storiesOf } from "@storybook/vue";
import RedBorderButton from "@/components/atoms/Button/RedBorderButton.vue";

storiesOf("atoms/buttons", module).add("red border button", () => ({
	components: { RedBorderButton },
	data() {
		return {
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<red-border-button
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</red-border-button
		>
	`,
}));
