import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import i18nJson from './assets/i18n.json'
import { createWebHistory, createRouter } from 'vue-router'
import "budoux/module/webcomponents/budoux-ja";

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
            name:"404 / ページが見つかりません"
        },
        {
            path:"/posts",
            component:()=>import("@/pages/posts/index.vue"),
            name:"Blogs"
        },
        {
            path:"/posts/:id",
            component:()=>import("@/pages/posts/post.vue")
        },
        {
            path:"/:pathMatch(.*)*",
            redirect:"/404"
        }
    ]
});

router.afterEach((to)=>{
    document.title=to.name?`${to.name as string} | 32ma.me`:"32ma.me / Shio Nakamura"
})

const app=createApp(App)
app.component("Icon",Icon)
app.use(router)
app.mount('#app')
