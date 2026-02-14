<template>
  <div class="content-wrapper">
    <div class="container-fluid px-4 pt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1>Customer List</h1>
        <router-link to="/customers/create" class="btn btn-success">
          Create Customer
        </router-link>
      </div>

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
                  <th>Photo</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                  <td>{{ customer.id }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.address }}</td>
                  <td>
                    <img
                      v-if="customer.photo"
                      :src="`${customerImgUrl}/customer/${customer.photo}`"
                      width="50"
                      height="50"
                      style="object-fit: cover; border-radius: 5px"
                    />
                  </td>
                  <td class="text-center">
                    <router-link
                      :to="`/customers/edit/${customer.id}`"
                      class="btn btn-sm btn-primary me-2"
                    >
                      Edit
                    </router-link>

                    <button
                      class="btn btn-sm btn-danger"
                      @click="deleteCustomer(customer.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p v-if="customers.length === 0" class="text-center mt-3">
              No customers found.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import api from "../../services/axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const customerImgUrl = import.meta.env.VITE_CUSTOMER_IMG_URL;

const customers = ref({});

const fetchCustomers = () => {
  // axios.get(`${baseUrl}/customers`)
  api.get(`/customers`)
    .then((res) => {
      console.log(res); 
      customers.value = res.data.customers; 
    })
    .catch((err) => {
      console.log(err);
     
    });
};




onMounted(() => {
  fetchCustomers();
});


function deleteCustomer(id) {
  if (!confirm("Are you sure you want to delete this customer?")) {
    return 

  }

 axios.delete(`${baseUrl}/customers/${id}`)
 .then(res=>{
  console.log(res);
  fetchCustomers();
  
 })
 .catch(err=>{
  console.log(err);
  
 })

}



</script>
