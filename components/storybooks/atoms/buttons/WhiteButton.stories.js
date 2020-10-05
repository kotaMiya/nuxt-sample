import { storiesOf } from "@storybook/vue";
import WhiteButton from "@/components/atoms/Button/WhiteButton.vue";

storiesOf("atoms/buttons", module).add("white button", () => ({
	components: { WhiteButton },
	data() {
		return {
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<white-button
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</white-button
		>
	`,
}));
