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
        [ LOG_IN ]: async ( { commit, dispatch }, data ) => {
            commit( START_LOGIN )

            const response = await fetch( '/login', {
                method: 'POST',
                body: JSON.stringify( data ),
                credentials: 'same-origin',
                headers: {
                    "Content-Type": "application/json"
                }
            } )

            if ( response.status === 401 ) {
                return dispatch( FORCE_AUTH )
            }

            try {
                const user = await response.json()
                commit( COMPLETE_LOGIN, user )
                router.push( '/' )
            } catch ( error ) {
                console.warn( error )
                commit( FAIL_LOGIN, error )
            }
        },

        [ LOG_OUT ]: async ( { commit } ) => {
            commit( START_LOGOUT )

            await fetch( '/logout', {
                method: 'POST',
                credentials: 'same-origin'
            } )

            router.push( '/auth' )

            commit( COMPLETE_LOGOUT )
        },

        [ FORCE_AUTH ]: async() => {
            router.push( '/auth' )
        },


        [ CHECK_AUTH ]: async( { commit, dispatch } ) => {
            commit( START_AUTH )

            const response = await fetch( '/api/auth', {
                credentials: 'same-origin'
            } )

            if ( response.status === 401 ) {
                return dispatch( FORCE_AUTH )
            }

            try {
                const user = await response.json()
                commit( COMPLETE_AUTH, user )
            } catch ( error ) {
                commit( FAIL_AUTH, error )
            }
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
