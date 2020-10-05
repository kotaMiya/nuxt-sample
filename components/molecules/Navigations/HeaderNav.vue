<template>
	<div class="header-navigation">
		<div class="header-logo">
			<text-link className="header-link" location="/"
				>レバテックルーキー</text-link
			>
		</div>
		<ul class="header-navigation-list">
			<li class="header-navigation-list-item">
				<text-link className="header-link" location="/offer/search"
					>企業を探す</text-link
				>
			</li>
			<li class="header-navigation-list-item">
				<text-link className="header-link" location="/guide"
					>就活ノウハウ</text-link
				>
			</li>
			<li class="header-navigation-list-item">
				<text-link className="header-link" location="/seminar"
					>キャリアセミナー</text-link
				>
			</li>
		</ul>
		<ul class="header-navigation-list">
			<li class="header-navigation-list-item">
				<text-link location="/">採用企業の方へ</text-link>
			</li>
			<li class="header-navigation-list-item">
				<base-button>会員登録はこちら</base-button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import BaseButton from "@/components/atoms/Button/BaseButton.vue";

export default Vue.extend({
	name: "HeaderNav",
	components: {
		TextLink,
		BaseButton,
	},
});
</script>

<style lang="scss" scoped>
.header {
	&-navigation {
		background-color: aquamarine;
		height: 100px;
		display: flex;
		align-items: center;
	}
	&-logo {
		align-items: center;
		margin-left: 70px;
		padding-left: 60px;
	}

	&-navigation-list {
		display: flex;

		&-item {
			margin-left: 80px;
			list-style: none;
		}
	}

	&-link {
		color: black;
		text-decoration: none;
	}
}

.nuxt-link-active {
	text-decoration: underline;
}
</style>
