<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <!-- <keep-alive> -->
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
        <!-- </keep-alive> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  name: "Quotes",
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: () => ({
      // The component we want to load.
      component: New,
      // The component to use as a placeholder while the
      // async component is loading.
      // loading: AsyncLoading,
      // The component to render instead if there is an error
      // loading the async component.
      // error: AsyncLoadError,
      // The delay before the loading component is shown.
      delay: 100,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 3000
    })
  }
};
</script>

<style>
</style>
