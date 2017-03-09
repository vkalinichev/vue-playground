<template>
    <div class="header">
        <div class="left">
            <div class="logo">{{ $t( 'app.title' ) }}</div>
            <menu class="menu">
                <router-link class="menu-item" to="/" exact>Home</router-link>
                <router-link class="menu-item" to="/users">Users</router-link>
                <router-link class="menu-item" to="/settings">Settings</router-link>
            </menu>
        </div>
        <div class="cell links">
            <a class="link" href="/profile" @click.prevent="profile">Vladimir Kalinichev</a>
            <a class="link" href="/logout" @click.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({ name: 'Header' })
    export default class Header extends Vue {
        profile() {
            console.log( 'profile' )
        }

        logout() {
            console.log( 'logout' )
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: darkslateblue;
        color: white;
        padding: 8px 20px;
        font-weight: 300;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .logo {
        font-size: 16px;
    }

    .menu {
        margin: 0;
        word-spacing: 16px;
    }

    .menu-item {
        position: relative;
        color: white;
        word-spacing: normal;
        opacity: .75;
        text-decoration: none;
    }

    .menu-item:hover {
        opacity: .9;
    }

    .menu-item.active {
        /*color: red;*/
        opacity: 1;
        pointer-events: none;
    }

    .menu-item.active:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        width: 14px;
        height: 14px;
        background: white;
        transform: rotate( 45deg );
        margin: 4px auto 0;
    }

    .links {
        font-size: 12px;
        word-spacing: 16px;
    }

    .link {
        color: white;
        opacity: .75;
        word-spacing: normal;
        transition: opacity .1s 0s ease-in-out;
    }

    .link:hover {
        opacity: 1;
    }
</style>
