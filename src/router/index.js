import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home", 
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/sample", 
        name: "Test",
        component: () => import("../pages/TestSample.vue"),
    }, 
]
export default createRouter({
    history: createWebHistory(),
    routes
});