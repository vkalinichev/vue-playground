<template>
    <div class="overlay">
        <div class="container">
            <header>
                Log In <span class="disabled">/ Register</span>
            </header>
            <div class="input-line">
                <input class="input" placeholder="Login" v-model="username"/>
            </div>
            <div class="input-line">
                <input
                    class="input"
                    placeholder="Password"
                    type="password"
                    v-model="password"
                    ref="password"
                    @keypress.enter="login"
                />
            </div>
            <footer class="footer">
                <button class="login-button" @click="login">Log In</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { LOG_IN } from '../constants/actions'

    @Component({ name: 'Login' })
    export default class Login extends Vue {

        username = ''
        password = ''



        login() {
            const { username, password } = this
            this.$store.dispatch( LOG_IN, { username, password } )
        }
    }
</script>

<style scoped>
    .overlay {
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        background: hsla( 240, 33%, 50%, .3 );
    }

    .overlay:before {
        content: '';
        flex: 1;
    }

    .overlay:after {
        content: '';
        flex: 2;
    }

    .container {
        width: 256px;
        margin: 0 auto;
        padding: 20px;

        background: white;
        border-radius: 3px;
        /*box-shadow: 0 0 10px hsla( 0, 0%, 0%, .05 ), 0 0 .01em hsla( 0, 0%, 0%, .2 );*/

        font-size: 16px;
        font-weight: 300;
        text-align: center;

        animation: softIn .33s 0s ease-in-out forwards;
    }

    .disabled {
        opacity: .33;
    }

    .input-line {
        margin: 20px 0;
    }

    .input {
        padding: .4em .6em .3em;
        width: 100%;

        border-radius: 3px;
        border: none;
        box-shadow:
            0 0 0 .03em hsla( 0, 0%, 0%, .25 ) inset,
            0 0 0 15px hsla( 250, 75%, 100%, 1 ) inset;

        font-size: .85em;
        text-align: center;
        outline: none;
        animation: fadeIn .5s 0s ease-in-out forwards;
        -webkit-text-fill-color: currentColor;
        transition: all 2s ease-in-out;
    }

    .input:-webkit-autofill {
        box-shadow:
            0 0 0 1px hsla( 250, 75%, 80%, 1 ) inset,
            0 0 0 15px hsla( 250, 75%, 100%, 1 ) inset;
        -webkit-text-fill-color: hsl( 250, 75%, 50% );
    }

    .footer {
        margin-top: 20px;
        text-align: center;
    }

    .login-button {
        min-width: 40%;
        padding: .4em 1em .3em;

        background-color: hsl( 240, 65%, 60% );
        border: none;
        border-radius: .3em;
        color: white;

        font-size: .85em;

        transition: background-color .05s 0s ease-in-out;
    }

    .login-button:hover {
        background-color: hsl( 240, 65%, 63% );
    }

    .login-button:active {
        background-color: hsl( 240, 65%, 70% );
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes softIn {
        from {
            transform: scale( .3 );
            opacity: .3;
        }
        to {
            transform: scale( 1 );
            opacity: 1;
        }
    }
</style>
