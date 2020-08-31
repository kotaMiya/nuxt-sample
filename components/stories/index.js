import { storiesOf } from "@storybook/vue";
import Button from "../components/Button/TextButton.vue";

storiesOf("Button", module).add("default", () => ({
	components: { Button },
	template: `<Button text="default" />`,
}));
