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
            path:"/about",
            component:()=>import("@/pages/about.vue"),
            name:"About"
        },
        {
            path:"/blogs",
            component:()=>import("@/pages/blogs/index.vue"),
            name:"Blogs"
        },
        {
            path:"/blogs/:id",
            component:()=>import("@/pages/blogs/post.vue")
        },
        {
            path:"/skills",
            component:()=>import("@/pages/skills.vue"),
            name:"Skills"
        },
        {
            path:"/links",
            component:()=>import("@/pages/links.vue"),
            name:"Links"
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
