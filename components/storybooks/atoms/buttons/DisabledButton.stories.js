import { storiesOf } from "@storybook/vue";
import DisabledButton from "@/components/atoms/Button/DisabledButton.vue";

storiesOf("atoms/buttons", module).add("disabled button", () => ({
	components: { DisabledButton },
	data() {
		return {
			btnWidth: "200px",
			btnHeight: "60px",
			textSize: "18px",
		};
	},
	template: `
		<disabled-button
			:btnWidth="btnWidth"
			:btnHeight="btnHeight"
			:textSize="textSize"
			>Button</disabled-button
		>
	`,
}));
