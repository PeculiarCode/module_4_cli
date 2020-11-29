import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue';
Vue.use(VueRouter); //挂载属性
const routes = [
    {
        path: "/",
        component: App
    }
]
const router =  new VueRouter({
    routes
})

export default router