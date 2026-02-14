<template>
  <div>
    Role List
    <ol >
        <li v-for="role in roles" :key="role.id">{{ role.name }}</li>
      </ol>
  </div>
</template>

<script setup>
import axios from 'axios';
import {  onMounted, ref } from 'vue';
  let roles= ref([])
 function  getRoles(){
      axios.get("http://localhost/VUE/template/public/api/roles")
      .then(res =>{
          console.log(res.data);
          roles.value= res.data.roles;
      })
      .catch(err =>{
         console.log(err);
      })
  }


  onMounted(()=>{
    getRoles()
    console.log(" on mount");
  });
</script>

<style>

</style>