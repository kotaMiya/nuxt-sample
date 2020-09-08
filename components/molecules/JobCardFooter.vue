<template>
  <div class="job-card-footer">
    <base-button>企業情報を見る</base-button>
    <base-button>この企業について相談する</base-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseButton from "@/components/atoms/Button/BaseButton.vue";

export default Vue.extend({
  name: "JobCardFooter",
  components: {
    BaseButton,
  },
});
</script>

<style lang="scss" scoped>
.job-card-footer {
  width: 770px;
  height: 120px;
  background-color: indianred;
  display: flex;
  justify-content: space-around;
}
</style>
