import { storiesOf } from "@storybook/vue";
import EntryForm from "@/components/organisms/Entry/EntryForm.vue";

storiesOf("organisms/entry", module).add("entry form", () => ({
	components: { EntryForm },
	data() {
		return {
			prefectures: [
				{
					id: 1,
					name: "北海道",
				},
				{
					id: 2,
					name: "青森県",
				},
			],
		};
	},
	template: `
    <div>
      <entry-form :prefData="prefectures" />
    </div> 
  `,
}));
