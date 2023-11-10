import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import i18nJson from './assets/i18n.json'


const i18n=createI18n({
    locale:navigator.language.split("-")[0],
    fallbackLocale:"en",
    messages:i18nJson
})

const app=createApp(App)
app.component("Icon",Icon)
app.use(i18n)
app.mount('#app')
