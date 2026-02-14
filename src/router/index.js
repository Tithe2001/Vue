import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customer/CustomerList.vue";
import Products from "../pages/product/Products.vue";
import City from "../pages/city/City.vue";
import CreateCustomer from "../pages/customer/CreateCustomer.vue";
import EditCustomer from "../pages/customer/EditCustomer.vue";
import LoginTemplate from "../layouts/LoginTemplate.vue";
import Login from "../pages/login/login.vue";
import Register from "../pages/login/Register.vue";
import Main from "../layouts/Main.vue";

const routes = [
  {
    path: "/login",
    component: LoginTemplate,
    children: [
      { path: "/login", component: Login },
      { path: "/register", component: Register },
    ],
  },

  {
    path: "/",
    component: Main,
    children: [
      { path: "/", component: Dashboard, meta: { requiresAuth: true } },

      { path: "/role", component: RoleList },

      { path: "/customers", component: CustomerList },
      { path: "/customers/create", component: CreateCustomer },
      { path: "/customers/edit/:id", component: EditCustomer },

      { path: "/products", component: Products },
      { path: "/city", component: City },
    ],
  },

  // {path:"/", component:Dashboard},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});




router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("token");

  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});