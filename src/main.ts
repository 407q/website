import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import i18nJson from './assets/i18n.json'
import { createWebHistory, createRouter } from 'vue-router'

const i18n=createI18n({
    locale:navigator.language.split("-")[0],
    fallbackLocale:"en",
    messages:i18nJson
})

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            component:()=>import("@/pages/index.vue")
        },
        {
            path:"/404",
            name:"notfound",
            component:()=>import("@/pages/404.vue")
        },
        {
            path:"/:pathMatch(.*)*",
            redirect:"404"
        }
    ]
});

const app=createApp(App)
app.component("Icon",Icon)
app.use(i18n)
app.use(router)
app.mount('#app')
