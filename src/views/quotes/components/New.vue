<template>
  <div>
    <h3>New Quote</h3>
    <button @click="increase(1, $event)">Increase!</button>
    <p>{{ counter }}</p>
    <p>{{targetName}}</p>
  </div>
</template>

<script>
/*eslint no-console: ["off"] */

export default {
  delay: 200,
  data: function() {
    return {
      counter: 0,
      targetName: ""
    };
  },
  methods: {
    increase(val, event) {
      this.counter += val;
      this.targetName = event.target.localName;
    }
  },

  destroyed() {
    console.log("Destroyed!");
  },
  deactivated() {
    console.log("Deactivated!");
  },
  activated() {
    console.log("Activated!");
  }
};
</script>

<style>
</style>

