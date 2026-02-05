<template>
  <div class="wrapper">
    <Header/>
    <Sidebar/>
  <RouterView/>
  <Footer/>
  </div>
  
  
</template>

<script lang="ts" setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';


</script>

<style>

</style>