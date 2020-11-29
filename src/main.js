import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './style.less'

const template = document.createElement('div')
template.setAttribute('id', 'app')
document.body.appendChild(template)
new Vue({
    router,
    render: h => h(App),
    el: '#app',
})

Vue.config.productionTip = false
