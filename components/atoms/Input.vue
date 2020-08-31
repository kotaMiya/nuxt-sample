<template>
  <input type="text" v-model="inputHandler" placeholder="type something" />
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator';

interface IData {
  inputValue: string; 
}

export default Vue.extend({
  name: "Input",
  data(): IData {
    return {
      inputValue: ''
    }
  },
  computed: {
    inputHandler: {
      get(): string {
        return this.inputValue;
      },
      set(value: string) {
        this.inputValue = value;
      }
    }
  }
})
</script>
