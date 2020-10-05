<template>
  <div class="triple-select_container">
    <label class="triple-select_label">
      {{ labelTxt }}
      <div class="triple-select_select">
        <base-select
          v-for="item in items"
          :key="item.name"
          :options="item.options"
          :selectName="item.name"
        />
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import BaseSelect from "@/components/atoms/Selectbox/BaseSelect.vue";

type Option = {
  id: Number;
  name: String;
};

interface Props {
  name: String;
  options: Option[];
}

export default Vue.extend({
  name: "TripleSelect",
  components: {
    BaseSelect,
  },
  props: {
    labelTxt: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<Props[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.triple-select_container {
  display: flex;
}

.triple-select_select {
  float: right;
  display: flex;
}
</style>
