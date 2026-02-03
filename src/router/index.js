import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/dashboard/Dashboard.vue";
import RoleList from "../pages/role/RoleList.vue";
import CreateRole from "../pages/role/CreateRole.vue";
import EditRole from "../pages/role/EditRole.vue";
import CustomerList from "../pages/customer/CustomerList.vue";
import Products from "../pages/product/Products.vue";
import City from "../pages/city/City.vue";


const routes=[
    {path:"/", component:Dashboard},
    {path:"/role", Component:RoleList},
    {path:"/role/create", component:CreateRole},
    {path:"/role/edit/:id", component:EditRole},
    {path:"/customer", component:CustomerList},


    {path:"/products",component:Products},
    {path:"/city",component:City},

]

export const router = createRouter({
    history:createWebHistory(),
    routes
});