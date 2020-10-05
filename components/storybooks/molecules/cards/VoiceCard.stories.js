import { storiesOf } from "@storybook/vue";
import VoiceCard from "@/components/molecules/Cards/VoiceCard.vue";

storiesOf("molecules/cards", module).add("job card", () => ({
	components: { VoiceCard },
	data() {
		return {
			userVoice: {
				imgUrl: "#",
				name: "test name",
				company: "test company",
				title: "Test Title",
				description: "test description",
			},
		};
	},
	template: `
    <div>
      <voice-card :userVoice="userVoice" />
    </div> 
  `,
}));
