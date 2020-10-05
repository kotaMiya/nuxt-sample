<template>
	<div class="job-card_container">
		<div class="job-card-header">
			<div class="job-card-header__left">
				<base-image url="#" />
			</div>
			<div class="job-card-header__right">
				<div class="job-card-header__right-top">
					<div class="job-card-header__right-top__title">
						<text-link :location="offerUrl">{{ job.title }}</text-link>
					</div>
					<div class="job-card-header__right-top__flag">
						<p-text>NEW</p-text>
						<p-text>2022年卒</p-text>
					</div>
				</div>
				<div class="job-card-header__right-bottom">
					<div class="job-card-header__right-bottom__description">
						<p-text
							>【22卒エンジニア / 1days
							8.9月】グループワークでソフトウェア開発を使用！◎登戸 /
							交通費支給</p-text
						>
					</div>
				</div>
			</div>
		</div>

		<div class="job-card-body">
			<p-text>事業内容</p-text>
			<p-text>レバレジーズ株式会社はいろいろしてます。</p-text>
		</div>

		<div class="job-card-footer">
			<base-button>企業情報を見る</base-button>
			<base-button>この企業について相談する</base-button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import axios from "axios";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";
import { IJob } from "@/types/interfaces";

export default Vue.extend({
	name: "JobCard",
	components: {
		TextLink,
		BaseImage,
	},
	data() {
		return {
			offerUrl: "/offer/detail/" + this.$props.job.id,
		};
	},
	props: {
		job: {
			type: Object as PropType<IJob>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.job-card_container {
	width: 770px;
	height: 580px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin: 30px 0;
}
</style>
