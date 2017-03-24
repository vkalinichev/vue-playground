<template>
    <div>
        <h2 class="pagename">Users list</h2>
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
    import { mapActions, mapState } from 'vuex'
    import User from './UserItem.vue'
    import Preloader from './Preloader.vue'
    import Component from 'vue-class-component'

    import { FETCH_USERS } from '../constants/actions'

    @Component({
        name: 'UsersList',
        components: {
            'user-item': User,
            'preloader': Preloader
        },
        computed: {
            ...mapState( {
                users: ( { users } ) => users.items,
                loading: ( { users } ) => users.loading
            } )
        },
        methods: {
            ...mapActions( { fetch: FETCH_USERS } )
        }
    })
    export default class UsersList extends Vue {
        created() {
            this.fetch()
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

    .pagename {
        display: inline-block;
        box-shadow: 0 0.02em #bbb;
        transition: box-shadow .15s ease-in-out;
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
