import { storiesOf } from "@storybook/vue";
import TextLink from "@/components/atoms/Link/TextLink.vue";

storiesOf("atoms/links", module).add("text link", () => ({
	components: { TextLink },
	template: `
    <div>
      <text-link location="#" textColor="red" textSize="1">Text Link</text-link>
    </div> 
  `,
}));
