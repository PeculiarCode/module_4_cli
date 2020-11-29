import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/about.vue'

Vue.use(VueRouter); //挂载属性
const routes = [
    {
        path: "/",
        component: Index
    }, {
        path: "/about",
        component: About
    }
]
const router = new VueRouter({
    routes
})

export default router