<template>
  <div>
    <select :name="selectName">
      <option v-for="option in options" :value="option.value" :key="option.id">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type PropsOption = {
  id: Number;
  value: String;
};

export default Vue.extend({
  name: "BaseSelect",
  props: {
    selectName: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<PropsOption[]>,
      required: true,
    },
  },
  mounted() {
    console.log(this.options);
  },
});
</script>
