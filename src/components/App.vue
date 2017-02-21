<template>
    <div>
        <header>
            <h1>Simple Vue-app example</h1>
            <menu>
                <router-link to="/">Home</router-link>
                <router-link to="/users">Users</router-link>
            </menu>
        </header>
        <router-view/>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    html {
        font: 400 14px / 1.4 sans-serif;
        color: #333;
        box-sizing: border-box;
    }

    * {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }
</style>
