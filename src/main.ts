import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import i18nJson from './assets/i18n.json'
import { createWebHistory, createRouter } from 'vue-router'
import "budoux/module/webcomponents/budoux-ja";

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
            component:()=>import("@/pages/404.vue"),
            name:"notfound"
        },
        {
            path:"/posts",
            component:()=>import("@/pages/posts/index.vue"),
            name:"posts"
        },
        {
            path:"/posts/:id",
            component:()=>import("@/pages/posts/post.vue")
        },
        {
            path:"/:pathMatch(.*)*",
            redirect:"404"
        }
    ]
});

router.afterEach((to)=>{
    document.title=to.name?`${i18n.global.t(`title.${to.name as string}`)} | 32ma.me`:"32ma.me / Shio Nakamura"
})

const app=createApp(App)
app.component("Icon",Icon)
app.use(i18n)
app.use(router)
app.mount('#app')
