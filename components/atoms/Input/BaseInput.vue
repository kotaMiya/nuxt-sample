<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :name="inputName"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  width: 250px;
  height: 40px;
}
</style>
