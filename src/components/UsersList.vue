<template>
    <div>
        <h2>Users list</h2>
        <ul>
            <user-item v-for="user in users" :user="user"/>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import User from './UserItem.vue'

    export default {
        name: 'UsersList',

        components: {
            'user-item': User
        },
        data() {
            return {
                users: []
            }
        },

        created: function () {
            this.fetchData()
        },

        methods: {
            fetchData: function () {
                fetch( 'https://jsonplaceholder.typicode.com/users' )
                    .then( res => res.json() )
                    .then( res => this.users = res )
            }
        }
    }
</script>
