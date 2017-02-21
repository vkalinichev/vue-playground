<template>
    <div>
        <span class="name">{{ user.name }}</span>
        <a class="email" :href="user.email">{{ user.email | lower }}</a>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        name: 'User',
        props: [ 'user' ],
        filters: {
            lower( value ) {
                return value.toLowerCase()
            }
        }
    })
    export default class User extends Vue {

    }
</script>

<style scoped>
    .name {
        color: black
    }

    .email {
        color: #888;
        margin-left: .3em;
        font-size: .95em;
    }

    .email:hover {
        color: #48c;
        text-decoration: none;
    }
</style>
