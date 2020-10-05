import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";

storiesOf("atoms/texts", module).add("header text", () => ({
	components: { HeaderText },
	template: `
    <div>
      <header-text size='h1'>h1</header-text>
      <header-text size='h2'>h2</header-text>
      <header-text size='h3'>h3</header-text>
    </div> 
  `,
}));
