<script setup lang="ts">
import {computed} from "vue";
import {jaModel,Parser} from "budoux";
const props=defineProps({text:String});

const parser=new Parser(jaModel);
const outText=computed(()=>parser.parse(props.text||"").join("<wbr>"));
</script>
<template>
    <span v-html="outText"/>
</template>