import Vue from 'vue'
import Vuex from 'vuex'
import {
    FETCH_USERS,
    FETCH_USERS_COMPLETED,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST
} from '../constants/actions'

Vue.use( Vuex )

export default ( locales ) => new Vuex.Store({

    state: {
        count: 0,
        locales,
        users: {
            loading: false,
            error: false,
            items: []
        }
    },

    mutations: {
        [ FETCH_USERS_REQUEST ] ( state ) {
            state.users.loading = true
        },
        [ FETCH_USERS_ERROR ] ( state ) {
            state.users = {
                loading: false,
                error: true
            }
        },
        [ FETCH_USERS_COMPLETED ] ( state, users ) {
            state.users = {
                loading: false,
                error: false,
                items: users
            }
        },
    },

    actions: {
        [ FETCH_USERS ]: async ({ commit }) => {
            commit( FETCH_USERS_REQUEST )
            try {
                const users = await fetch('/api/users').then( res => res.json() )
                commit( FETCH_USERS_COMPLETED, users )
            } catch ( error ) {
                commit( FETCH_USERS_ERROR, error )
            }
        }
    }

})
