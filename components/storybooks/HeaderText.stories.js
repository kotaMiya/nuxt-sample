import { withKnobs, text } from "@storybook/addon-knobs";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";

export default {
	title: "HeaderText",
  decorators: [withKnobs]
};

export const HeaderOne = () => ({
  components: { HeaderText },
  props: {
    className: {
      default: text('class', 'header-one-class')
    },
    size: {
      default: text('tag', 'h1') 
    },
    text: {
      default: text('Text', 'Header one')
    }
  },
	template: '<header-text :className="className" :size="size">{{ text }}</header-text>',
});

export const HeaderTwo = () => ({
	components: { HeaderText },
	template: '<header-text className="header-text" size="h2">Header two</header-text>',
});

export const HeaderThree = () => ({
	components: { HeaderText },
	template: '<header-text className="header-text" size="h3">Header Three</header-text>',
});

export const HeaderFour = () => ({
	components: { HeaderText },
	template: '<header-text className="header-text" size="h4">Header Four</header-text>',
});
