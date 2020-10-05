import { storiesOf } from "@storybook/vue";
import SeminarCard from "@/components/molecules/Cards/SeminarCard.vue";

storiesOf("molecules/cards", module).add("seminar card", () => ({
	components: { SeminarCard },
	data() {
		return {
			seminar: {
				id: 1,
				title: "Test Title",
			},
		};
	},
	template: `
    <div>
      <seminar-card :seminar="seminar" />
    </div> 
  `,
}));
