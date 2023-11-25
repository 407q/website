<script setup>
    import skillsItem from "./skillsItem.vue";
</script>

<template>
    <div class="list">
        <skillsItem :icon="'simple-icons:adobeillustrator'" :category="$t('category.design')" :title="'Illustrator'"/>
        <skillsItem :icon="'simple-icons:adobexd'" :category="$t('category.design')" :title="'Adobe XD'"/>
        <skillsItem :icon="'simple-icons:adobeaftereffects'" :category="$t('category.video')" :title="'After Effects'"/>
        <skillsItem :icon="'simple-icons:googleappsscript'" :category="$t('category.programming')" :title="'Google Apps Script'"/>
        <skillsItem :icon="'simple-icons:typescript'" :category="$t('category.programming')" :title="'TypeScript'"/>
        <skillsItem :icon="'simple-icons:python'" :category="$t('category.programming')" :title="'Python'"/>
        <skillsItem :icon="'simple-icons:vuedotjs'" :category="$t('category.web')" :title="'Vue.js'"/>
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