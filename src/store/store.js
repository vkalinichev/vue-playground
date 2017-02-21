import Vue from 'vue'
import Vuex from 'vuex'
import { increment, decrement } from '../constants/mutations'

Vue.use( Vuex )

const store = new Vuex.Store({

    state: {
        count: 0
    },

    mutations: {
        [ increment ]: ( state ) => ++state.count,
        [ decrement ]: ( state ) => --state.count
    }

})

export default store
