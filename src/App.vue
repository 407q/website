<script setup lang="ts">
import {ref,onMounted} from "vue";
const backShow=ref<boolean>();
function scroll(){
  backShow.value=(window.scrollY>=window.innerHeight/3);
}
function scrollBack(){
  window.scrollTo({top:0,behavior:"smooth"});
}
onMounted(()=>{
  window.addEventListener("scroll",scroll);
  window.addEventListener("beforeunload",function(){
    window.scrollTo(0, 0);
  });
})
</script>
<template>
    <RouterView/>
    <Transition><span class="back" title="一番上に戻ります" @click="scrollBack" v-show="backShow"/></Transition>
</template>
<style scoped>
.v-enter-active,.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,.v-leave-to {
  opacity: 0;
}
.back{
  position:fixed;
  bottom:5vh;
  right:5vw;
  width:50px;
  height:50px;
  display:block;
  background:rgba(var(--bg),.7);
  border-radius:25px;
  border:1px solid rgba(var(--fg),.5);
  cursor:pointer;
  
}
.back::after{
  display:block;
  content:"";
  width:15px;
  height:15px;
  border-left:3px solid rgb(var(--fg));
  border-top:3px solid rgb(var(--fg));
  transform:translate(16px,20px) rotate(45deg);
  transition:.3s;
}
.back:hover{
  background:rgb(var(--bg));
}
.back:hover::after{
  transform:translate(16px,17px) rotate(45deg);
}
</style>