<script setup lang="ts">
import {ref} from "vue";
import {format,isSameDay} from "date-fns";
import {createClient} from "microcms-js-sdk";
import type {Posts} from "@/types/cms"
import type {Ref} from "vue";
const client=createClient({serviceDomain:"32m",apiKey:import.meta.env.VITE_MICROCMS_KEY,retry:true});
const posts:Ref<Posts,Posts>=ref([]);
const respData=client.get({endpoint:"blogs"}).then(res=>{posts.value=res.contents;return res});
</script>
<template>
    <main>
        <h1>Blogs</h1>
        <p style="margin-top:0;text-align:center;font-weight:300">ブログ</p>
        <Transition>
            <p style="text-align:center;" v-if="posts.length==0">Loading...</p>
            <div v-else class="posts">
                <div class="post" v-for="post in posts">
                    <RouterLink :to="`/blogs/${post.id}`">
                        <h3>{{post.title}}</h3>
                        <p>{{format(post.publishedAt||post.createdAt,"yyy/M/d")}}{{post.updatedAt&&!isSameDay(post.updatedAt,post.publishedAt||post.createdAt)?` (最終更新: ${format(post.updatedAt,"yyy/M/d")})`:""}}</p>
                    </RouterLink>
                </div>
            </div>
        </Transition>
    </main>
</template>
<style scoped>
.v-enter-active{
  transition: opacity 0.2s ease;
}
.v-enter-from{
  opacity: 0;
}
.posts{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    margin-block:1rem;
}
a{
    text-decoration:none;
}
.post{
    width:85%;
    padding:0.2rem 1rem;
    transition:.2s ease;
}
.post:hover{
    transform:scale(1.01);
}
h3{
    border:none;
    padding:0;
    margin-bottom:0;
}
p{
    margin-top:.5rem;
}
</style>