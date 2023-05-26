import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/", 
        name: "Test",
        component: () => import("../pages/TestSample.vue"),
    }, 
    {
        path: "/sample",
        name: "Home", 
        component: () => import("../pages/Home.vue"),
    },
]
export default createRouter({
    history: createWebHistory(),
    routes
});