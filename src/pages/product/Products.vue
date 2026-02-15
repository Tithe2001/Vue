<template>
  <div class="content-wrapper">
        <div class="container-fluid px-4 pt-4">
    <div class="row">
       <div class="col-md-3 col-sm-6 mb-4" v-for="product in products" :key="product.id">


        <ProductCard :product="product"/>

        

       </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from './ProductCard.vue';
import axios from 'axios';


const baseUrl = import.meta.env.VITE_BASE_URL;


let products=ref([]);

function fetchProducts(){
    axios
    // .get(`https://dummyjson.com/products`)
    .get(`${baseUrl}/products`)
    .then((res) => {
        console.log(res);
        // products.value=res.data.products;
        products.value=res.data.products;

        
        
    }).catch((err) => {
        console.log(err);
        
        
    });

}

onMounted(()=>{
    fetchProducts();
})


</script>



<style>

</style>