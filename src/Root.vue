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
    import VHeader from './components/Header.vue'
    import VFooter from './components/Footer.vue'

    @Component({
        name: 'Root',
        components: {
            VHeader,
            VFooter
        }
    })
    export default class Root extends Vue {
    }
</script>

<style>
    * {
        box-sizing: inherit;
    }

    html {
        height: 100%;
        overflow: hidden;
        font: 400 14px / 1.4 sans-serif;
        color: #333;
        box-sizing: border-box;
        cursor: default;
        user-select: none;
    }

    body {
        height: 100%;
        margin: 0;
        overflow: auto;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        margin-top: 0;
    }

    a {
        -webkit-user-drag: none;
    }
</style>

<style scoped>
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
