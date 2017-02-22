import Vue from 'vue'
import Root from './Root.vue'
import locales from './i18n/i18n'
import router from './router/router'
import Store from './store/store'

Vue.component( 'Root', Root )
Vue.config['lang'] = 'ru'

const store = Store( locales )

window.app = new Vue({
    el: '#app',
    router,
    store,
    template: '<Root/>'
})
