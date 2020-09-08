<template>
  <div class="job-card-header">
    <div class="job-card-header__left">
      <job-image url="/" />
    </div>
    <div class="job-card-header__right">
      <div class="job-card-header__right-top">
        <div class="job-card-header__right-top__title">
          <text-link :location="jobUrl">{{ title }}</text-link>
        </div>
        <div class="job-card-header__right-top__flag">
            <p-text>NEW</p-text>
            <p-text>2022年卒</p-text> 
        </div>
      </div>
      <div class="job-card-header__right-bottom">
        <div class="job-card-header__right-bottom__description">
          <p-text>【22卒エンジニア / 1days 8.9月】グループワークでソフトウェア開発を使用！◎登戸 / 交通費支給</p-text>
        </div>
      </div>
    </div> 
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TextLink from "@/components/atoms/Link/TextLink.vue";
import JobImage from "@/components/atoms/Image/JobImage.vue";
import PText from "@/components/atoms/Text/PText.vue";

type Props = {
  id: number;
  title: string;
}

export default Vue.extend({
  name: "JobCardHeader",
  components: {
    TextLink,
    JobImage,
    PText,
  },
  data() {
    return {
      jobUrl: '' as string
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: "Test title"
    }
  },
  mounted() {
    this.jobUrl = '/job/' + this.$props.id;
  }
});
</script>

<style lang="scss" scoped>
.job-card-header {
  width: 770px;
  height: 120px;
  background-color: darkcyan;
  display: flex;

  &__left {
    margin: 10px;
    flex: left;
  }

  &__right {
    flex: right;
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;

      &__title {
        flex: left;
      }

      &__flag {
        flex: right;
        display: flex;
      }
    }
  }
}
</style>
