<script setup lang="ts">
import {ref,watch} from "vue";
import {useRoute,useRouter} from "vue-router";
import {format,isSameDay} from "date-fns";
import {createClient} from "microcms-js-sdk";
import {Head} from "@unhead/vue/components";
import BudouXSSG from "@/components/budoux-ssg.vue";
import type {Post} from "@/types/cms"
import type {Ref} from "vue";
const route=useRoute();
const client=createClient({serviceDomain:"32m",apiKey:import.meta.env.VITE_MICROCMS_KEY,retry:true});
const post:Ref<Post,Post>=ref({
    id:route.params.id as string,
    createdAt:"",
    updatedAt:"",
    publishedAt:"",
    revisedAt:"",
    title:"",
    content:""
});
const respData=client.get({
    endpoint:"blogs",
    contentId:route.params.id as string,
    queries:{draftKey:new URLSearchParams(location.search).get("draftKey")||""}
}).then(res=>{
    post.value=res;
    return res;
},err=>{
    if(err.message=="fetch API response status: 404"){
        router.push("/404");
    }
    return err;
//}).then(res=>{console.log(res)//use on dev
});
const router=useRouter();
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