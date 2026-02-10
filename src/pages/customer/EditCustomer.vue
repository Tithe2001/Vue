<template>
  <div class="content-wrapper">
    <div class="container py-4">
      <h2>Edit Customer</h2>

      <form @submit.prevent="handleUpdate" enctype="multipart/form-data">
        <div class="mb-3">
          <label>Name</label>
          <input type="text" class="form-control" v-model="customer.name" required />
        </div>

        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control" v-model="customer.email" />
        </div>

        <div class="mb-3">
          <label>Address</label>
          <input type="text" class="form-control" v-model="customer.address" />
        </div>

        <!-- Old Photo -->
        <div class="mb-2" v-if="customer.photo">
          <label>Old Photo</label><br />
          <img
            :src="`${customerImgUrl}/customer/${customer.photo}`"
            width="100"
            height="100"
            class="mt-2"
            style="object-fit:cover;border-radius:5px"
          />
        </div>

        <!-- New Photo -->
        <div class="mb-3">
          <label>New Photo (optional)</label>
          <input type="file" class="form-control" @change="handleImage" />
          <img
            v-if="preview"
            :src="preview"
            class="mt-2"
            width="100"
            height="100"
            style="object-fit:cover;border-radius:5px"
          />
        </div>

        <button class="btn btn-primary" type="submit">Update Customer</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const baseUrl = import.meta.env.VITE_BASE_URL;
const customerImgUrl = import.meta.env.VITE_CUSTOMER_IMG_URL;

let customer = reactive({
  name: "",
  email: "",
  address: "",
  photo: "",
  newPhoto: null,
});

const preview = ref(null);

const fetchCustomer = async () => {
  try {
    const res = await axios.get(`${baseUrl}/customers/${route.params.id}`);
    customer.name = res.data.customer.name;
    customer.email = res.data.customer.email;
    customer.address = res.data.customer.address;
    customer.photo = res.data.customer.photo;
  } catch (err) {
    console.error(err);
    alert("Failed to fetch customer data");
  }
};

const handleImage = (event) => {
  const file = event.target.files[0];
  customer.newPhoto = file;
  preview.value = URL.createObjectURL(file);
};

const handleUpdate = async () => {
  const formData = new FormData();
  formData.append("name", customer.name);
  formData.append("email", customer.email);
  formData.append("address", customer.address);
  if (customer.newPhoto) formData.append("photo", customer.newPhoto);

  try {
    await axios.post(`${baseUrl}/customers/${route.params.id}?_method=PUT`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    router.push("/customers");
  } catch (err) {
    console.error(err);
    alert("Failed to update customer");
  }
};

onMounted(() => {
  fetchCustomer();
});
</script>
