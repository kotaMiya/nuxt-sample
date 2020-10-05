<template>
  <div class="top-search_company">
    <header-text size="h3">企業を探す</header-text>
    <p-text
      >厳選されたベンチャー企業の紹介を受け入れたり、業界に詳しいプロに就活相談出来る無料のサービスです。</p-text
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default Vue.extend({
  name: "SearchCompany",
  components: {
    HeaderText,
    PText,
  },
});
</script>

<style lang="scss" scoped>
.top-search_company {
  text-align: center;
}
</style>
