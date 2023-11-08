<script setup>
    import skillsItem from "./skillsItem.vue";
</script>

<template>
    <div class="list">
        <skillsItem :icon="'simple-icons:adobeillustrator'" :category="'デザイン'" :title="'Illustrator'"/>
        <skillsItem :icon="'simple-icons:adobexd'" :category="'デザイン'" :title="'Adobe XD'"/>
        <skillsItem :icon="'simple-icons:adobeaftereffects'" :category="'映像'" :title="'After Effects'"/>
        <skillsItem :icon="'simple-icons:googleappsscript'" :category="'プログラミング'" :title="'Google Apps Script'"/>
        <skillsItem :icon="'simple-icons:python'" :category="'プログラミング'" :title="'Python'"/>
        <skillsItem :icon="'simple-icons:vuedotjs'" :category="'Web'" :title="'Vue.js'"/>
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