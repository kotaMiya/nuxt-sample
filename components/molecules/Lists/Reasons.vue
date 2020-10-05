<template>
	<div class="top-reasons">
		<ul class="top-reasons-list">
			<li class="top-reasons-list-item">
				<base-image url="#" />
				<p-text>あなたがまだ知らない厳選ベンチャー企業を紹介</p-text>
				<p-text
					>大手総合系サイトで優良ベンチャー企業を見つけるのは至難の技。私たちはメガベンチャーから最先端領域の急成長企業まで成長力のある企業に厳選し、その中であなたの希望に合った企業のみをご紹介します。</p-text
				>
			</li>
			<li class="top-reasons-list-item">
				<base-image url="#" />
				<p-text>web上にはない現場エンジニアのリアルな話が聞ける</p-text>
				<p-text
					>気になる企業を伝えることで、現場エンジニアに何度でも話を聞ける、カジュアル面談が出来ます。「現場の開発手法」「教育環境」「企業文化」などweb上にはないリアルな情報を面接前に知ることができます。</p-text
				>
			</li>
			<li class="top-reasons-list-item">
				<base-image url="#" />
				<p-text>1対1でエンジニア就活のプロに相談できる</p-text>
				<p-text
					>ES添削、面接対策、ポートフォリオ作成サポートを実施します。また、大手とベンチャーで異なる就職開始時期、対策方法などをアドバイス、あなたの希望企業への内定率が向上します。</p-text
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import PText from "@/components/atoms/Text/PText.vue";
import BaseImage from "@/components/atoms/Image/BaseImage.vue";

export default Vue.extend({
	name: "Reasons",
	components: {
		HeaderText,
		PText,
		BaseImage,
	},
});
</script>
