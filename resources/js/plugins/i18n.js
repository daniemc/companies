import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store'

import en from './../lang/en.json'
import es from './../lang/es.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: store.getters.lang,
    messages: {
        en,
        es
    }
})

export default i18n


