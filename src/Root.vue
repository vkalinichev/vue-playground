<template>
    <div>
        <header>
            <h1>{{ $t( 'app.title' ) }} </h1>
            <menu>
                <router-link class="menu-link" to="/" exact>Home</router-link>
                <router-link to="/users">Users</router-link>
                <router-link to="/settings">Settings</router-link>
            </menu>
        </header>
        <div>
            Counter: {{ count }}
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { increment, decrement } from './constants/mutations'

    @Component
    export default class Root extends Vue {

        get count() {
            return this.$store.state.count
        }

        increment() {
            this.$store.commit( increment )
        }

        decrement() {
            this.$store.commit( decrement )
        }
    }
</script>

<style>
    html {
        font: 400 14px / 1.4 sans-serif;
        color: #333;
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }

    .active {
        color: red;
    }
</style>
