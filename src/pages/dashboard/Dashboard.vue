<script setup>
import { ref } from 'vue';
import Counter from '../../components/Counter.vue';



let name="Afrin Akther Tithe";
let greeting="Welcome to the class Saima";

let Courses=["React","laravel","vue","php"];
let count= ref(0);


let active=ref(true);

const changecourse=()=>{
  active.value=!active.value;
}



</script>




<template>
 <h1>{{ greeting }}</h1>
 <h2>From: {{ name }}</h2>
 <ol>
  <li v-for="(course, i) in Courses" :key="i">{{ course }}</li>
 </ol>

 

 <button v-on:click="changecourse">Want To Admit</button>

<h5 v-if="active">yes</h5>
 <h5 v-else>not now</h5>

 <Counter/>

</template>






<style scoped>

</style>
