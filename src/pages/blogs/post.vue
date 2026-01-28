<script setup lang="ts">
import {ref,onServerPrefetch,onMounted,inject} from "vue";
import {useRoute,useRouter} from "vue-router";
import {format,isSameDay} from "date-fns";
import {createClient} from "microcms-js-sdk";
import {Head} from "@unhead/vue/components";
import BudouXSSG from "@/components/budoux-ssg.vue";
import type {Post} from "@/types/cms"
import type {Ref} from "vue";
const route=useRoute();
const router=useRouter();
const client=createClient({serviceDomain:"32m",apiKey:import.meta.env.VITE_MICROCMS_KEY,retry:true});
const postId=route.params.id as string;

// initialState を inject
const initialState=inject<Record<string,any>>('initialState',{});

// 初期値は initialState から取得
const post:Ref<Post,Post>=ref(initialState[`post_${postId}`]||{
    id:postId,
    createdAt:"",
    updatedAt:"",
    publishedAt:"",
    revisedAt:"",
    title:"",
    content:""
});

// SSG時にデータを取得し initialState に保存
onServerPrefetch(async()=>{
    const res=await client.get({
        endpoint:"blogs",
        contentId:postId
    });
    post.value=res;
    initialState[`post_${postId}`]=res;
});

// 下書きプレビュー用 または 開発時（SPA）のフォールバック
onMounted(async()=>{
    const draftKey=new URLSearchParams(location.search).get("draftKey");
    if(draftKey||!post.value.publishedAt){
        try{
            const res=await client.get({
                endpoint:"blogs",
                contentId:postId,
                queries:draftKey?{draftKey}:{}
            });
            post.value=res;
        }catch(err:any){
            if(err.message=="fetch API response status: 404"){
                router.push("/404");
            }
        }
    }
});
</script>
<template>
    <main>
        <Head><title>{{post.title}}</title></Head>
        <Transition>
            <div v-if="post.publishedAt==''" role="status" aria-live="polite">
                <p style="text-align:center">Loading...</p>
                <span class="sr-only">記事を読み込んでいます</span>
            </div>
            <article v-else>
                <h1>{{post.title}}</h1>
                <p style="margin-top:0;text-align:center">{{format(post.publishedAt||post.createdAt,"yyy/M/d")}}{{post.updatedAt&&!isSameDay(post.updatedAt,post.publishedAt||post.createdAt)?` (最終更新: ${format(post.updatedAt,"yyy/M/d")})`:""}}</p>
                <BudouXSSG :text="post.content"/>
            </article>
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