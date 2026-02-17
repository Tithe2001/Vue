<template>
  <div class="content-wrapper">
    <section class="content">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="box">
            <div class="box-header bg-primary">
              <h4 class="box-title">YOUR CART</h4>
            </div>

            <div class="box-body">
              <div class="table-responsive">
                <table class="table product-overview">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product info</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th style="text-align: center">Total</th>
                      <th style="text-align: center">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item in cartStore.cart" :key="item.id">
                      <td>
                        <img :src="`${imgURL}/${item.photo}`" width="80" />
                      </td>

                      <td>
                        <h5>{{ item.name }}</h5>
                        <p>{{ item.type }}</p>
                      </td>

                      <td>{{ item.selling_price }}</td>

                      <td>
                        <input
                          type="number"
                          v-model="item.quantity"
                          min="1"
                          class="form-control"
                          @change="
                            cartStore.updateQuantity(item.id, item.quantity)
                          "
                        />
                      </td>

                      <td align="center">
                        {{ item.selling_price * item.quantity }}
                      </td>

                      <td align="center">
                        <button
                          class="btn btn-danger"
                          @click="cartStore.removeItem(item.id)"
                        >
                          <i class="ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <router-link
                  to="/order/OrderDetails"
                  class="btn btn-success pull-right"
                >
                  <i class="fa fa-shopping-cart"></i> Place Order
                </router-link>

                <router-link to="/products" class="btn btn-info">
                  <i class="fa fa-arrow-left"></i> Continue shopping
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-12 col-lg-4">
          <div class="box">
            <div class="box-header bg-info">
              <h4 class="box-title">Cart Summary</h4>
            </div>

            <div class="box-body">
              <div class="table-responsive">
                <table class="table simple mb-0">
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td class="text-end fw-700">$3240</td>
                    </tr>
                    <tr>
                      <td>Delivery Charges</td>
                      <td class="text-end fw-700">$50</td>
                    </tr>

                    <tr>
                      <th class="bt-1">Payable Amount</th>
                      <th class="bt-1 text-end fw-900 fs-18">$1688</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="box-footer">
              <button class="btn btn-danger">Cancel Order</button>
               <router-link to="/order/OrderDetails" class="btn btn-success pull-right">
  <i class="fa fa-shopping-cart"></i> Place Order
</router-link>
            </div>
          </div>

          <div class="box">
            <div class="box-header bg-dark">
              <h4 class="box-title">Support</h4>
            </div>

            <div class="box-body">
              <h4 class="fw-500">
                <i class="ti-mobile"></i> +1800 123 1234
                <span class="text-info">(Toll Free)</span>
              </h4>
              <p>Contact us for any queries. We are avalible 24x7x365.</p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "../../stores/Cart";

const cartStore = useCartStore();
const imgURL = import.meta.env.VITE_IMG_URL;

console.log("Cart page:", cartStore.cart);
</script>

<style></style>
