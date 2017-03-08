<template>
    <div>
        <input placeholder="Login" v-model="username"/>
        <input placeholder="Password" type="password" v-model="password"/>
        <br/>
        <br/>
        <button @click="login">Log in</button>
        <br/>
        <br/>
        {{ username }} : {{ password }}
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { LOG_IN } from '../constants/actions'

    @Component({ name: 'Auth' })
    export default class Auth extends Vue {

        username = 'test'
        password = 'test'

        login() {
            const { username, password } = this
            this.$store.dispatch( LOG_IN, { username, password } )
        }
    }
</script>
