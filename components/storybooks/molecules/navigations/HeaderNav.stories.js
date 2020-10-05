import { storiesOf } from "@storybook/vue";
import HeaderNav from "@/components/molecules/Navigations/HeaderNav.vue";

storiesOf("molecules/navigations", module).add("header navigation", () => ({
	components: { HeaderNav },
	template: `
    <div>
      <header-nav />
    </div> 
  `,
}));
