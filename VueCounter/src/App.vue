<script setup>
import {ref} from 'vue';

const count = ref(0);
</script>

<template>
<main>
  <div>
    <h4>
      The current count is...
    </h4>
    <h1>{{ count }}</h1>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>
</main>
</template>

<style scoped>
div {
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>