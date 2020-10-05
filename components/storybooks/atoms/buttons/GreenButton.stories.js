import { storiesOf } from "@storybook/vue";
import GreenButton from "@/components/atoms/Button/GreenButton.vue";

storiesOf("atoms/buttons", module).add("green button", () => ({
	components: { GreenButton },
	data() {
		return {
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<green-button
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</orange-button
		>
	`,
}));
