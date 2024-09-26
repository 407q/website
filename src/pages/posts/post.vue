<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import {format,isSameDay} from "date-fns";
import {createClient} from "microcms-js-sdk";
import footerComp from "@/components/footerComp.vue";
import type {Post} from "@/types/cms"
import type {Ref} from "vue";
const route=useRoute();
const client=createClient({serviceDomain:"32m",apiKey:import.meta.env.VITE_MICROCMS_KEY});
const post:Ref<Post,Post>=ref({
    id:route.params.id as string,
    createdAt:"",
    updatedAt:"1970-01-01T00:00:00.000Z",
    publishedAt:"1970-01-01T00:00:00.000Z",
    revisedAt:"",
    title:"",
    content:""
});
const respData=client.get({endpoint:"blogs",contentId:route.params.id as string}).then(res=>{post.value=res;console.log(post.value);return res});
</script>
<template>
    <p style="margin-bottom:none;margin-left:1rem;"><RouterLink to="/posts">←{{$t("posts.back")}}</RouterLink></p>
    <main>
        <h1>{{post.title}}</h1>
        <p>{{$t("posts.publishedat")}} {{format(post.publishedAt,"yyy/M/d")}}{{isSameDay(post.updatedAt,post.publishedAt)?"":` (${$t("posts.updatedat")} ${format(post.updatedAt,"yyy/M/d")})`}}</p>
        <budoux-ja v-html="post.content"/>
    </main>
    <footerComp/>
</template>