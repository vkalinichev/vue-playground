<template>
    <router-view class="root-viewport"/>
</template>

<script>
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    import Component from 'vue-class-component'
    import { CHECK_AUTH } from './constants/actions'

    @Component({
        name: 'Root',
        methods: {
            ...mapActions( { checkAuth: CHECK_AUTH } )
        }
    })
    export default class Root extends Vue {
        created() {
            this.checkAuth()
        }
    }
</script>

<style>
    * {
        box-sizing: inherit;
    }

    html {
        height: 100%;
        overflow: hidden;
        font: 400 14px / 1.4 sans-serif;
        color: #333;
        box-sizing: border-box;
        cursor: default;
        /*user-select: none;*/
    }

    body {
        height: 100%;
        margin: 0;
        overflow: auto;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        margin-top: 0;
    }

    a {
        -webkit-user-drag: none;
    }
</style>

<style>
    .root-viewport {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>
