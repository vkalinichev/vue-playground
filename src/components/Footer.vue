<template>
    <footer class="footer">
        <div class="inner">
            Footer
        </div>
    </footer>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({ name: 'Footer' })
    export default class Footer extends Vue {}
</script>

<style scoped>
    .footer {
        background: darkslateblue;
        padding: 8px 20px;
        color: white;
        font-weight: 300;
        font-size: 10px;
    }
    .inner {
        opacity: .75;
    }
</style>
