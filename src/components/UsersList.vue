<template>
    <div>
        <h2>Users list</h2>
        <div class="container">
            <preloader v-if="loading" class="preloader"/>
            <ul v-else class="list">
                <user-item v-for="user in users" :user="user" :key="user.name"/>
            </ul>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import User from './UserItem.vue'
    import Preloader from './Preloader.vue'
    import Component from 'vue-class-component'

    import { FETCH_USERS } from '../constants/actions'

    @Component({
        name: 'UsersList',
        components: {
            'user-item': User,
            'preloader': Preloader
        }
    })
    export default class UsersList extends Vue {

        get users() {
            return this.$store.state.users.items
        }
        get loading() {
            return this.$store.state.users.loading
        }

        created() {
            this.$store.dispatch( FETCH_USERS )
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 100px;
        min-height: 100px;
        max-width: 320px;
    }

    .list {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .preloader {
        flex: 0 0 24px;
    }
</style>
