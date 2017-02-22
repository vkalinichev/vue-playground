<template>
    <div>
        <h2>Settings 1</h2>
        <label>Language:
            <select v-model="lang" title="">
                <option v-for="lang in langs" :value="lang">
                    {{ lang }}
                </option>
            </select>
        </label>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        name: 'Settings'
    })
    export default class Settings extends Vue {

        get langs() {
            return this.$store.state.locales
        }

        get lang() {
            return this.$lang
        }

        set lang( newValue ) {
            Vue.config.lang = newValue
        }
    }
</script>
