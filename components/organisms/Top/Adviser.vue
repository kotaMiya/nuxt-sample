<template>
  <div class="top-adviser">
    <header-text size="h3">アドバイザー紹介</header-text>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderText from "@/components/atoms/Text/HeaderText.vue";

export default Vue.extend({
  name: "Adviser",
  components: {
    HeaderText,
  },
});
</script>

<style lang="scss" scoped>
.top-adviser {
  text-align: center;
  margin-bottom: 100px;
}
</style>
