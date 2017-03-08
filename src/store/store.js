import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'
import {
    FETCH_USERS,
    FETCH_USERS_COMPLETED,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST,
    FORCE_AUTH,
    LOG_IN
} from '../constants/actions'

Vue.use( Vuex )

export default ( locales ) => new Vuex.Store( {

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
        [ FETCH_USERS_ERROR ] ( state, error ) {
            console.error( error )
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
        [ LOG_IN ]: ( store, data ) => {
            fetch( '/login', {
                method: 'POST',
                body: JSON.stringify( data ),
                credentials: 'same-origin',
                headers: {
                    "Content-Type": "application/json"
                }
            } )
        },
        [ FORCE_AUTH ]: async() => {
            console.log( 'AUTH' )
            router.push( '/auth' )
        },

        [ FETCH_USERS ]: async( { commit, dispatch } ) => {
            commit( FETCH_USERS_REQUEST )

            const response = await fetch( '/api/users', {
                credentials: 'same-origin'
            } )

            if ( response.status === 401 ) {
                return dispatch( FORCE_AUTH )
            }

            try {
                const users = await response.json()
                commit( FETCH_USERS_COMPLETED, users )
            } catch ( error ) {
                commit( FETCH_USERS_ERROR, error )
            }
        }
    }

} )
