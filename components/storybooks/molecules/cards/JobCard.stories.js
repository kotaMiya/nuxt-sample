import { storiesOf } from "@storybook/vue";
import JobCard from "@/components/molecules/Cards/JobCard.vue";

storiesOf("molecules/cards", module).add("job card", () => ({
	components: { JobCard },
	data() {
		return {
			job: {
				id: 1,
				title: "Test Title",
			},
		};
	},
	template: `
    <div>
      <job-card :job="job" />
    </div> 
  `,
}));
