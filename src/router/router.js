import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import UsersList from '../components/UsersList.vue'
import User from '../components/UserItem.vue'

Vue.use( Router )

export default new Router( {
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/users', name: 'UsersList', component: UsersList },
        { path: '/users/:id', name: 'User', component: User }
    ]
} )
