<template>
  <div class="single-select_container">
    <label class="single-select_label">
      {{ labelTxt }}
      <div class="single-select_select">
        <base-select :selectName="name" :options="data" />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseSelect from "@/components/atoms/Selectbox/BaseSelect.vue";

export default Vue.extend({
  name: "SingleSelect",
  components: {
    BaseSelect,
  },
  props: {
    labelTxt: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.single-select_container {
  display: flex;
}

.single-select_select {
  float: right;
}
</style>
