<template>
  <div>
    <slot :grid="grid">
      <h2>{{ grid.title2 }}</h2>
    </slot>
    <div class="row">
      <app-quote
        v-for="(quote, index) in quotes"
        @click.native="deleteQuote(index)"
        :key="index"
      >{{ quote }}</app-quote>
    </div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  data: function() {
    return {
      grid: {
        title1: "title1",
        title2: "title2"
      }
    };
  },
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
</style>
