<script setup lang="ts">
import {ref} from "vue";
import {format} from "date-fns";
import {createClient} from "microcms-js-sdk";
import type {Posts} from "@/types/cms"
import type {Ref} from "vue";
defineProps({num:Number});
const client=createClient({serviceDomain:"32m",apiKey:import.meta.env.VITE_MICROCMS_KEY});
const posts:Ref<Posts,Posts>=ref([]);
const respData=client.get({endpoint:"blogs"}).then(res=>{posts.value=res.contents;console.log(posts.value);return res});
</script>
<template>
    <div class="posts">
        <div class="post" v-for="post in (num&&num<posts.length)?posts.slice(0,num):posts">
            <RouterLink :to="`/posts/${post.id}`">
                <h3>{{post.title}}</h3>
                <p>{{format(post.publishedAt,"yyy/M/d hh:mm")}}</p>
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
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
    background:rgb(var(--bg));
    border-radius:10px;
    padding:0.2rem 1rem;
    filter:drop-shadow(0 0 5px rgba(var(--fg),.5));
    transition:.3s ease-out;
}
.post:hover{
    transform:scale(1.01);
    filter:drop-shadow(0 0 10px rgba(var(--fg),.5));
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