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
    import Component from 'vue-class-component'

    @Component({
        name: 'UsersList',
        components: {
            'user-item': User
        }
    })
    export default class UsersList extends Vue {

        users = []

        created() {
            this.fetchData()
        }

        fetchData() {
            fetch( 'https://jsonplaceholder.typicode.com/users' )
                .then( res => res.json() )
                .then( res => this.users = res )
        }
    }
</script>
