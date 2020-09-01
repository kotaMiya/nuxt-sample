<template>
  <div class="job-card-body">
    <p-text>事業内容</p-text>
    <p-text>レバレジーズ株式会社はいろいろしてます。</p-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import TextLink from "@/components/atoms/Link/TextLink.vue";
import JobImage from "@/components/atoms/Image/JobImage.vue";
import PText from "@/components/atoms/Text/PText.vue";

export default defineComponent({
  name: "JobCardBody",
  components: {
    TextLink,
    JobImage,
    PText,
  },
});
</script>

<style scoped>
.job-card-body {
  width: 770px;
  height: 340px;
  background-color: gold;
}
</style>
