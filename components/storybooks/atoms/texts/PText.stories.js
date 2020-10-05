import { storiesOf } from "@storybook/vue";
import PText from "@/components/atoms/Text/PText.vue";

storiesOf("atoms/texts", module).add("p text", () => ({
	components: { PText },
	template: `
    <div>
      <p-text>h1</p-text>
      <p-text>h2</p-text>
      <p-text>h3</p-text>
    </div> 
  `,
}));
