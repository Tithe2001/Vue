import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref([]);

  function addToCart(product) {
    const check = cart.value.find(p => p.id === product.id);
    if (check) {
      check.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  function updateQuantity(id, qty) {
    const item = cart.value.find(p => p.id === id);
    if (item) item.quantity = qty;
  }

  function removeItem(id) {
    cart.value = cart.value.filter(p => p.id !== id);
  }

  function clearCart() {
    cart.value = [];
  }

  return {
    cart,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart
  };
});
