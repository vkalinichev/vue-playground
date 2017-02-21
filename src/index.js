import Vue from 'vue'
import App from './components/App.vue'
import router from './router/router.js'
import store from './store/store'

Vue.component( 'App', App )

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>'
})
