import { storiesOf } from "@storybook/vue";
import Top from "@/pages/index.vue";

storiesOf("pages/top", module).add("top page", () => ({
	components: { Top },
	template: "<top />",
}));
