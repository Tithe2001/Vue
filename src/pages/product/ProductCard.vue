
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
      <button @click="add" class="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../../stores/Cart';

const cartStore = useCartStore();
const imgURL = import.meta.env.VITE_IMG_URL;
let props = defineProps(["product"]);

function add() {
  cartStore.addToCart(props.product);
  console.log("Cart now:", cartStore.cart);
}
</script>

<style></style>
