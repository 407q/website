<script setup lang="ts">
import {ref,watch} from "vue";
import {useRoute,useRouter} from "vue-router";
import {format,isSameDay} from "date-fns";
import {createClient} from "microcms-js-sdk";
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
watch(post,(postData:Post)=>{
    document.title=`${postData.title}`;
});
</script>
<template>
    <main>
        <Transition>
            <p style="text-align:center" v-if="post.publishedAt==''">Loading...</p>
            <div v-else>
                <h1>{{post.title}}</h1>
                <p style="margin-top:0;text-align:center;font-weight:300">{{format(post.publishedAt||post.createdAt,"yyy/M/d")}}{{post.updatedAt&&!isSameDay(post.updatedAt,post.publishedAt||post.createdAt)?` (最終更新: ${format(post.updatedAt,"yyy/M/d")})`:""}}</p>
                <budoux-ja v-html="post.content"/>
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
</style>