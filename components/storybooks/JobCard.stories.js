import { withKnobs, text } from "@storybook/addon-knobs";
import JobCard from "@/components/organisms/JobCard.vue";
import JobCardHeader from "@/components/molecules/JobCardHeader.vue";
import JobCardFooter from "@/components/molecules/JobCardFooter.vue";
import JobCardBody from "@/components/molecules/JobCardBody.vue";

export default {
	title: "JobCard",
	decorators: [withKnobs],
};

export const Entire = () => ({
	components: { JobCard },
	template: "<job-card />",
});

export const Header = () => ({
	components: { JobCardHeader },
	template: "<job-card-header />",
});

export const Body = () => ({
	components: { JobCardBody },
	template: "<job-card-body />",
});

export const Footer = () => ({
	components: { JobCardFooter },
	template: "<job-card-footer />",
});
