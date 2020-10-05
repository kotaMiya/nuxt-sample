import { storiesOf } from "@storybook/vue";
import JobCardList from "@/components/organisms/Offer/JobCardList.vue";

storiesOf("organisms/offer", module).add("offer card list", () => ({
	components: { JobCardList },
	data() {
		return {
			offers: [
				{
					id: 1,
					title: "First title",
				},
				{
					id: 2,
					title: "Second title",
				},
				{
					id: 3,
					title: "Third title",
				},
				{
					id: 4,
					title: "Forth title",
				},
				{
					id: 5,
					title: "Fifth title",
				},
			],
		};
	},
	template: `
    <div>
      <offer-card-list :offers="offers" />
    </div> 
  `,
}));
