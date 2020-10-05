import { storiesOf } from "@storybook/vue";
import DoubleInput from "@/components/molecules/Forms/Input/DoubleInput.vue";

storiesOf("molecules/forms", module).add("double input", () => ({
	components: { DoubleInput },
	template: `
    <div>
      <double-input
        labelTxt="氏名"
        firstPlace="姓"
        firstName="lastName"
        secondPlace="名"
        secondName="firstName"
      />
    </div> 
  `,
}));
