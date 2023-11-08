<script setup>
    import worksItem from "./worksItem.vue";
</script>

<template>
    <div class="list">
        <worksItem :left="'iframe|https://www.youtube.com/embed/x37vXM_rio4'" :category="'映像制作'" :title="'ShowREEL 2022'" :text="'2022年11月までに作った映像作品をまとめたものです。これ以降はあまり作品としての映像を作れていません…。'"/>
        <worksItem :left="'img|/img/machida-cf2023.webp'" :category="'Webサイト'" :title="'町田キャンフェス2023 特設サイト'" :text="'学校の文化祭(みたいなもの)のWebサイトです。Vueでのサイト制作の他に、Illustratorを用いたフロアマップや案内看板のデザイン、サイトに載せる写真の撮影なども行いました。'"/>
    </div>
</template>
<style scoped>
.list{
  margin-top:2rem;
  display:grid;
  justify-items:center;
  grid-auto-rows:none;
  grid-gap:15px;
}
</style>