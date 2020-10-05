<template>
  <div>
    <label>
      {{ labelTxt }}
      <base-input
        :type="inputType"
        :inputName="inputName"
        :placeholder="inputPlaceholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/atoms/Input/BaseInput.vue";

export default Vue.extend({
  name: "SingleInput",
  components: {
    BaseInput,
  },
  props: {
    labelTxt: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
