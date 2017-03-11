<template>
    <div class="layout">
        <v-header class="header"/>
        <router-view class="viewport"/>
        <v-footer class="footer"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import VHeader from './Header.vue'
    import VFooter from './Footer.vue'

    @Component({
        name: 'App',
        components: {
            VHeader,
            VFooter
        }
    })
    export default class App extends Vue {}
</script>

<style>
    .layout {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .header {
        flex-shrink: 0;
    }

    .viewport {
        flex: 1;
        padding: 20px;
    }

    .footer {
        flex-shrink: 0;
    }
</style>
