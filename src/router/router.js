import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import UsersList from '../components/UsersList.vue'
import User from '../components/UserItem.vue'
import Settings from '../components/Settings.vue'

Vue.use( Router )

export default new Router( {

    linkActiveClass: 'active',

    routes: [
        { path: '/', component: Index },
        { path: '/users', component: UsersList },
        { path: '/users/:id', component: User },
        { path: '/settings', component: Settings }
    ]
} )
