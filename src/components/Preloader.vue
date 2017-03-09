<template>
    <span class="loader"></span>
</template>

<script>
    export default {
        name: 'Preloader'
    }
</script>

<style scoped>
    .loader {
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        border: 1px solid hsla( 0, 0%, 0%, .05 );
        border-top-color: hsla( 260, 100%, 50%, .5 );
        /*border-right-color: hsla( 0, 0%, 0%, .2 );*/
        animation: spin .66s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg)
        }
        to {
            transform: rotate(360deg)
        }
    }
</style>
