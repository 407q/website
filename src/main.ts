import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import { Head } from '@unhead/vue/components'
import { createHead } from '@unhead/vue/server'

export const createApp=ViteSSG(App,{
    routes:[
        {
            path:"/",
            component:()=>import("@/pages/index.vue")
        },
        {
            path:"/404",
            component:()=>import("@/pages/404.vue"),
        },
        {
            path:"/about",
            component:()=>import("@/pages/about.vue"),
        },
        {
            path:"/blogs",
            component:()=>import("@/pages/blogs/index.vue"),
        },
        {
            path:"/blogs/:id",
            component:()=>import("@/pages/blogs/post.vue")
        },
        {
            path:"/skills",
            component:()=>import("@/pages/skills.vue"),
        },
        {
            path:"/links",
            component:()=>import("@/pages/links.vue"),
        },
        {
            path:"/:pathMatch(.*)*",
            redirect:"/404"
        }
    ]
},({app,initialState})=>{
    app.component("Icon",Icon)
    app.component("Head",Head)
    app.provide('initialState',initialState)
});
