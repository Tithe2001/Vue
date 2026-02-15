<template>
  <div class="card" style="width: 18rem">
    <!-- <img :src="props.product.thumbnail" class="card-img-top" alt="..."> -->
    <img :src="`${imgURL}/${props.product.photo}`" class="card-img-top"
  alt="Product Image"
  style="height: 195px; object-fit: cover;"/>

    <div class="card-body">
      <h5 class="card-title">{{ props.product.name }}</h5>
      <p class="card-text">Type: {{ props.product.type }}</p>
      <p class="card-text">{{ props.product.selling_price }}</p>
      <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
</template>

<script setup>
const imgURL = import.meta.env.VITE_IMG_URL;
let props = defineProps(["product"]);
</script>

<style></style>
