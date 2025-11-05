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
        <Head><title>Blogs</title></Head>
        <h1>Blogs</h1>
        <p style="margin-top:0;text-align:center;font-weight:300">ブログ</p>
        <Transition>
            <div v-if="posts.length==0" role="status" aria-live="polite">
                <p style="text-align:center;">Loading...</p>
                <span class="sr-only">ブログ記事を読み込んでいます</span>
            </div>
            <section v-else class="posts">
                <article class="post" v-for="post in posts" :key="post.id">
                    <RouterLink :to="`/blogs/${post.id}`" :aria-label="`${post.title} の記事を読む`">
                        <h2>{{post.title}}</h2>
                        <p>{{format(post.publishedAt||post.createdAt,"yyy/M/d")}}{{post.updatedAt&&!isSameDay(post.updatedAt,post.publishedAt||post.createdAt)?` (最終更新: ${format(post.updatedAt,"yyy/M/d")})`:""}}</p>
                    </RouterLink>
                </article>
            </section>
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
    border-radius:5px;
    border:1px solid transparent;
}
.post:hover{
    transform:scale(1.01);
    border-color:rgb(var(--fg));
}
h2{
    border:none;
    padding:0;
    margin-bottom:0;
    line-height:1em;
    font-size:1.5rem;
}
p{
    margin-top:.5rem;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>