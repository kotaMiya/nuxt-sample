<template>
  <div class="job-card-header">
    <job-image />
    <text-link location="/">レバレジーズ株式会社</text-link>
    <p-text>NEW</p-text>
    <p-text>2022年卒</p-text>
    <p-text>【22卒エンジニア / 1days 8.9月】グループワークでソフトウェア開発を使用！◎登戸 / 交通費支給</p-text>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import TextLink from '@/components/atoms/Link/TextLink.vue';
import JobImage from '@/components/atoms/Image/JobImage.vue';
import PText from '@/components/atoms/Text/PText.vue';

export default defineComponent({
  name: "JobCardHeader",
  components: {
    TextLink,
    JobImage,
    PText
  }
})
</script>

<style scoped>
.job-card-header {
  width: 770px;
  height: 120px;
  background-color: darkcyan;
}
</style>
