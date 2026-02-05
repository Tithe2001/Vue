<template>
   <div class="content-wrapper">
        <div class="container-fluid px-4 pt-4">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="division" class="form-label">Division  {{  division_id}}</label>
        <select name="division" id="division" class="form-select" v-model="division_id">
          <option value="">Select Division</option>
          <option  v-for="division in divisions" :key="division.id" :value="division.id" >{{ division.name }}</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="city" class="form-label" >District</label>
        <select name="city" id="city" class="form-select">
          <option value="">Select District</option>
          <option  v-for="district in districts" :key="district.id" :value="district.id">{{ district.name }}</option>
        </select>
      </div>
    </div>
    </div>

  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';


const baseUrl=import.meta.env.VITE_BASE_URL;

let divisions=ref([]);
const fetchDivisions=()=>{
    axios.get(`${baseUrl}/divisions`)
    .then((res) => {
        console.log(res.data);
        
         divisions.value= res.data.divisions;
        
    }).catch((err) => {
        console.log(err);
        
        
    });
}

onMounted(()=>{
    fetchDivisions();
})

 





let division_id= ref("");
let districts= ref([]);

 watch(division_id, (newVal, oldVal) => {
  console.log('Division changed:', oldVal, '→', newVal)
  fetchDistricts(newVal)
  
})

console.log(division_id.value);



const fetchDistricts=(id)=>{
   axios.get(`${baseUrl}/districts/${id}`)
   .then(res=>{
      console.log(res.data);
      districts.value= res.data.districts;
   })
   .catch()
 }


</script>

<style>

</style>
