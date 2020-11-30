import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.less'
new Vue({
    router,
    render: (h) => h(App),
    el: '#app'
})
Vue.config.productionTip = false
