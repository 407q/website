<script setup lang="ts">
import postsListComp from "@/components/postsListComp.vue";
import footerComp from "@/components/footerComp.vue";
</script>
<template>
    <main>
        <h1>Blog</h1>
        <p style="text-align:center"><RouterLink to="/">{{$t("posts.backtop")}}</RouterLink></p>
        <postsListComp/>
    </main>
    <footerComp/>
</template>
<style scoped>
main{
    min-height:calc(90vh - 7.05rem);
}
</style>