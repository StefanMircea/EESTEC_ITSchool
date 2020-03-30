<template>
  <div>
    <h1>Cypher</h1>
    <div class="container">
      <div v-for="(number,index) in numbers" :key="index">
        <button v-on:click="incrementare(index)">+</button>
        <p>{{ number }}</p>
        <button v-on:click="decrementare(index)">-</button>
      </div>
    </div>
    <button id="submit" v-on:click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 0, 0, 0],
      correctCypher: 1212
    };
  },
  methods: {
    incrementare(index) {
      if (this.numbers[index] == 9) {
        this.numbers.splice(index, 1, 0);
      } else {
        this.numbers.splice(index, 1, this.numbers[index] + 1);
      }
      console.log(this.numbers[index]);
    },
    decrementare(index) {
      if (this.numbers[index] == 0) {
        this.numbers.splice(index, 1, 9);
      } else {
        this.numbers.splice(index, 1, this.numbers[index] - 1);
      }
      console.log(this.numbers[index]);
    },
    submit() {
      if (this.numbers.join("") != this.correctCypher) {
        alert("Incorrect guess");
      } else {
        alert("Correct guess");
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  text-align: center;
  width: 20%;
  min-width: 300px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

#submit {
  display: block;
  margin: auto;
  margin-top: 10px;
  height: 30px;
}

p {
  flex: 1 0 25%;
  margin-top: 10px;
  margin-bottom: 10px;
}

h1 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
}
</style>
