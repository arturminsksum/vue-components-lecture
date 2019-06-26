<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote">
      <template #[dynamicSlotName]>Typo your Quote</template>
    </app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote">
      <template v-slot:default="props">{{ props.grid.title2 }}</template>
    </app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import HeaderQuote from "./components/HeaderQuote.vue";

export default {
  name: "Progress",
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: HeaderQuote
  },
  data: function() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10,
      dynamicSlotName: "label"
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete Quotes first!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
