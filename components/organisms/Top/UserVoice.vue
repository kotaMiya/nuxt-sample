<template>
	<div class="top-user-voice_container">
		<header-text size="h3">ご利用者の声</header-text>
		<ul class="top-user-voice_list">
			<li v-for="userVoice in userVoices" :key="userVoice.title">
				<voice-card :userVoice="userVoice" />
			</li>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import VoiceCard from "@/components/molecules/Cards/VoiceCard.vue";

export default Vue.extend({
	name: "UserVoice",
	components: {
		HeaderText,
		VoiceCard,
	},
	data() {
		return {
			userVoices: [
				{
					imgUrl: "" as string,
					name: "K.Iさん 東京大学大学院工学系研究科機械工学専攻" as string,
					company: "不動産自社開発企業 内定獲得" as string,
					title: "有名企業からミドルベンチャーまで幅広い紹介で、やりたいことが明確に！" as string,
					description: "他のサイトで人気な企業だけではなく、自分の機械学習に関する知識や実用的な仕事をしたいという希望を踏まえて、有名企業からミドルベンチャーまで幅広く紹介していただきました。その結果、規模や業種によってできることが明確になり、満足のいく就活が出来ました。" as string,
				},
				{
					imgUrl: "" as string,
					name: "K.Iさん 東京大学大学院工学系研究科機械工学専攻" as string,
					company: "不動産自社開発企業 内定獲得" as string,
					title: "有名企業からミドルベンチャーまで幅広い紹介で、やりたいことが明確に！" as string,
					description: "他のサイトで人気な企業だけではなく、自分の機械学習に関する知識や実用的な仕事をしたいという希望を踏まえて、有名企業からミドルベンチャーまで幅広く紹介していただきました。その結果、規模や業種によってできることが明確になり、満足のいく就活が出来ました。" as string,
				},
				{
					imgUrl: "" as string,
					name: "K.Iさん 東京大学大学院工学系研究科機械工学専攻" as string,
					company: "不動産自社開発企業 内定獲得" as string,
					title: "有名企業からミドルベンチャーまで幅広い紹介で、やりたいことが明確に！" as string,
					description: "他のサイトで人気な企業だけではなく、自分の機械学習に関する知識や実用的な仕事をしたいという希望を踏まえて、有名企業からミドルベンチャーまで幅広く紹介していただきました。その結果、規模や業種によってできることが明確になり、満足のいく就活が出来ました。" as string,
				},
			],
			swiperOption: {
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		};
	},
});
</script>

<style lang="scss" scoped>
.top-user-voice {
	&_container {
		text-align: center;
		margin-bottom: 100px;
	}

	&_list {
		display: flex;
	}

	&_list > li {
		list-style: none;
	}
}
</style>
