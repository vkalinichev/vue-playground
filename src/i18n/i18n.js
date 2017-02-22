import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as locales from './locales'

Vue.use( VueI18n )

const localesList = Object.keys(locales)

localesList.forEach( lang => Vue['locale']( lang, locales[lang] ))

export default localesList
