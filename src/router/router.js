import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/App.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import User from '../components/UserItem.vue'
import UsersList from '../components/UsersList.vue'
import Settings from '../components/Settings.vue'

Vue.use( Router )

export default new Router( {

    linkActiveClass: 'active',

    routes: [ {
        path: '/login', component: Login
    }, {
        path: '/', component: Index,

        children: [
            { path: '/', component: Home },
            { path: '/users', component: UsersList },
            { path: '/users/:id', component: User },
            { path: '/settings', component: Settings }
        ]
    } ]
} )
