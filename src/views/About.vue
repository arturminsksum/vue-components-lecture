<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <div class="form-inline">
      <input class="form-control" v-model="message" :style="{width: 300 + 'px'}">
    </div>
    <br>
    <button
      class="btn"
      :class="{'btn-primary': true}"
      v-on:click="reverseMessage"
    >Перевернуть сообщение</button>
    <br>
    <br>
    <ol v-show="todos.length">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        v-bind:class="[counter ? 0 : 'text-danger', 'text-info']"
        v-html="todo.text"
      ></li>
    </ol>
    <br>
    <br>
    <p v-bind:class="{ 'text-success': editedMessage}">Заголовок был редактирован {{counter}} раз</p>
    <p v-show="editedMessage">Результат {{editedMessage}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Привет, Vue!",
      editedMessage: "",
      counter: 0,
      todos: [
        // { text: "Изучить JavaScript" },
        // { text: "Изучить Vue" },
        // { text: "Создать что-нибудь классное" }
      ]
    };
  },

  computed: {
    // геттер вычисляемого значения
    reversedMessage: function() {
      // `this` указывает на экземпляр vm
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },

  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  },

  watch: {
    message: function(val) {
      this.counter += 1;
      this.editedMessage = val;
    }
  },
  /*eslint no-console: ["off"] */
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style lang="sass"></style>
