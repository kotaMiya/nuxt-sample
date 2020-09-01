<template>
  <div class="job-card-header">
    <div class="job-card-header__image">
      <job-image url="/" />
    </div>
    <div class="job-card-header__title">
      <text-link location="/">レバレジーズ株式会社</text-link>
    </div>
    <div class="job-card-header__flag">
        <p-text>NEW</p-text>
        <p-text>2022年卒</p-text> 
      </div>
    <div class="job-card-header__description">
      <p-text>【22卒エンジニア / 1days 8.9月】グループワークでソフトウェア開発を使用！◎登戸 / 交通費支給</p-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import JobImage from "@/components/atoms/Image/JobImage.vue";
import PText from "@/components/atoms/Text/PText.vue";

type Props = {
  id: string;
  title: string;
}

export default defineComponent({
  name: "JobCardHeader",
  components: {
    TextLink,
    JobImage,
    PText,
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.job-card-header {
  width: 770px;
  height: 120px;
  background-color: darkcyan;
  display: flex;

  &__image {
    margin: 10px;
    flex: left;
  }

  &__title {
    flex: right;
  }

  &__flag {
   flex: right;
   display: flex; 
  }

  &__description {
    float: left;
  }
}
</style>
