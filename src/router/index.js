import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Users from "../Users.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",component:Home},
        {path:"/users",component:Users}
    ]
})
export default router