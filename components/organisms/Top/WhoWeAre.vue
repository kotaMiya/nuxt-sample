<template>
  <div class="top-whoweare">
    <header-text size="h3"
      >レバテックが運営するITエンジニア専門の就活エージェント</header-text
    >
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
  name: "WhoWeAre",
  components: {
    HeaderText,
    PText,
  },
});
</script>

<style lang="scss" scoped>
.top-whoweare {
  text-align: center;
  margin-bottom: 100px;
}
</style>
