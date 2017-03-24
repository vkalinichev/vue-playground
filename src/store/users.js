import api from './api'
import {
    FETCH_USERS,
    FETCH_USERS_COMPLETED,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST
} from '../constants/actions'

export const users = {

    state: {
        loading: false,
        error: false,
        items: []
    },

    mutations: {
        [ FETCH_USERS_REQUEST ] ( state ) {
            state.loading = true
        },
        [ FETCH_USERS_ERROR ] ( state, error ) {
            console.error( error )
            state.loading = false
            state.error = true
        },
        [ FETCH_USERS_COMPLETED ] ( state, users ) {
            state.loading = false
            state.error = false
            state.items = users
        }
    },

    actions: {
        [ FETCH_USERS ]: async( store ) => {
            await api( store, '/api/users', [ FETCH_USERS_REQUEST, FETCH_USERS_COMPLETED, FETCH_USERS_ERROR ] )
        }
    }

}
