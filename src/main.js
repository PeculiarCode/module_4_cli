import Vue from 'vue'
import App from './App.vue'
import './style.less'

const template = document.createElement('div')
template.setAttribute('id', 'init')
document.body.appendChild(template)
console.log(document)
const vm = new Vue({
    el: '#init',
    components: { App },
    template: '<App/>',
})

Vue.config.productionTip = false
document.body.appendChild(vm.$el)
