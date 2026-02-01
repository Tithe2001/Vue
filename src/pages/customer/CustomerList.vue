<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center">Customer List</h1>
    <div class="table-responsive">
      <div class="card shadow-sm">
        <div class="card-body p-3">
          <table class="table table-hover table-striped mb-0">
            <thead class="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody class="">
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.id }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.address }}</td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-primary me-2">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const customers = ref([]);
const fetchCustomers = () => {
  axios
    .get("http://localhost/Laravel/template/public/api/customers")
    .then((res) => {
      console.log(res.data.customers);
      customers.value = res.data.customers;
    })
    .catch();
};

onMounted(() => {
  fetchCustomers();
});
</script>
