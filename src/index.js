import Vue from 'vue'

const app = window.app = new Vue({
    el: '.app',
    data: {
        message: 'Vue.js@2 on Webpack@2 works!'
    }
})

console.log( app );
