<script setup>
    import worksItem from "./worksItem.vue";
</script>

<template>
    <div class="list">
        <worksItem :left="'iframe|https://www.youtube.com/embed/xQjDyNvoreY'" :category="$t('category.video')" :title="$t('works.showreel2022.title')" :desc="$t('works.showreel2022.desc')"/>
        <worksItem :left="'img|/img/machida-cf2023.webp'" :category="$t('category.web')" :title="$t('works.machida-cf2023.title')" :desc="$t('works.machida-cf2023.desc')"/>
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