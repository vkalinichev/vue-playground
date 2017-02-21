import Vue from 'vue'
import App from './components/App.vue'
import router from './router/router.js'

Vue.component( 'App', App )

new Vue({
    el: '#app',
    router: router,
    template: '<App/>'
})
