import Vue from 'vue'
import Vuex from 'vuex'
import { increment, decrement } from '../constants/mutations'

Vue.use( Vuex )

export default ( locales ) => new Vuex.Store({

    state: {
        count: 0,
        locales
    },

    mutations: {
        [ increment ]: ( state ) => ++state.count,
        [ decrement ]: ( state ) => --state.count
    }

})
