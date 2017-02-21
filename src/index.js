import Vue from 'vue'
import Root from './Root.vue'
import router from './router/router.js'
import store from './store/store'

Vue.component( 'Root', Root )

new Vue({
    el: '#app',
    router,
    store,
    template: '<Root/>'
})
