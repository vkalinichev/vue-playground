import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'
import {
    FETCH_USERS,
    FETCH_USERS_COMPLETED,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST,
    START_AUTH,
    COMPLETE_AUTH,
    FAIL_AUTH,
    CHECK_AUTH,
    FORCE_AUTH,
    START_LOGIN,
    COMPLETE_LOGIN,
    FAIL_LOGIN,
    LOG_IN,
    LOG_OUT,
    START_LOGOUT,
    COMPLETE_LOGOUT
} from '../constants/actions'

Vue.use( Vuex )


async function api ( { commit, dispatch }, url, [ START, SUCCESS, FAILED ], options = {} ) {
    commit( START )
    const response = await fetch( url, {
        credentials: 'same-origin',
        ...options
    } )

    if ( response.status === 401 ) {
        return dispatch( FORCE_AUTH )
    }

    try {
        const json = await response.json()
        commit( SUCCESS, json )
    } catch ( error ) {
        console.warn( error )
        commit( FAILED, error )
    }
}

export default ( locales ) => new Vuex.Store( {

    state: {
        count: 0,
        locales,
        user: {
            loggingIn: false,
            loggedIn: false
        },
        users: {
            loading: false,
            error: false,
            items: []
        }
    },

    mutations: {
        [ START_AUTH ] ( { user } ) {
            user.loggingIn = true
            user.loggedIn = false
        },
        [ COMPLETE_AUTH ] ( { user }, userData ) {
            user = {
                loggingIn: false,
                loggedIn: true,
                ...userData
            }
        },
        [ FAIL_AUTH ] ( { user } ) {
            user.loggingIn = false
            user.loggedIn = false
        },
        [ START_LOGIN ] ( { user } ) {
            user.loggingIn = true
            user.loggedIn = false
        },
        [ COMPLETE_LOGIN ] ( state, userData ) {
            state.user = {
                loggingIn: false,
                loggedIn: true,
                ...userData
            }
        },
        [ FAIL_LOGIN ] ( { user } ) {
            user.loggingIn = false
            user.loggedIn = false
        },
        [ START_LOGOUT ] ( { user } ) {
            user.loggingIn = false
            user.loggedIn = false
        },
        [ COMPLETE_LOGOUT ] ( ) {
        },
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
        [ LOG_IN ]: async ( store, data ) => {
            const actions = [ START_LOGIN, COMPLETE_LOGIN, FAIL_LOGIN ]
            const options = {
                method: 'POST',
                body: JSON.stringify( data ),
                headers: { "Content-Type": "application/json" }
            }
            await api( store, '/login', actions, options )
            router.push( '/' )
        },

        [ LOG_OUT ]: async ( store ) => {
            const actions = [ START_LOGOUT, COMPLETE_LOGOUT, COMPLETE_LOGOUT ]
            await api( store, '/logout', actions, { method: 'POST' } )
            store.dispatch( FORCE_AUTH )
        },

        [ FORCE_AUTH ]: async() => {
            router.push( '/login' )
        },

        [ CHECK_AUTH ]: async( store ) => {
            await api( store, '/api', [ START_AUTH, COMPLETE_AUTH, FAIL_AUTH ] )
        },

        [ FETCH_USERS ]: async( store ) => {
            await api( store, '/api/users', [ FETCH_USERS_REQUEST, FETCH_USERS_COMPLETED, FETCH_USERS_ERROR ] )
        }
    }

} )
