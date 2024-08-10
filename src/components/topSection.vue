<script setup lang="ts">
import {ref} from "vue";
let bgLoaded=ref<boolean>(false);
const onBgLoaded=()=>{bgLoaded.value=true;}
</script>
<template>
    <header>
      <Transition><img class="bg" v-show="bgLoaded" src="/img/topcover.webp" @load="onBgLoaded"></Transition>
      <div class="wrapper">
        <img class="logo" src="/img/logo.svg">
      </div>
      <span class="arrow"/>
    </header>
</template>
<style scoped>
@keyframes arrow{
  from{
    transform:translateY(-30px) rotate(45deg);
    opacity:0;
    animation-timing-function: ease-out;
  }
  45%,60%{
    transform:rotate(45deg);
    opacity:1;
    animation-timing-function: ease-in;
  }
  to{
    transform:translateY(20px) rotate(45deg);
    opacity:0;
    animation-timing-function: ease-in;
  }
}
@keyframes logoIn{
  from,10%{
    transform:scale(1.5);
    opacity:0;
    filter:blur(10px);
  }
  to{
    transform:none;
    opacity:1;
    filter:none;
  }
}
header{
  width:100vw;
  height:100vh;
  margin:0;
  background:#000;
  z-index:-50;
}
img.bg{
  width:100vw;
  height:100vh;
  max-height:100vh;
  object-fit:cover;
  opacity:0.3;
  position:absolute;
}
.wrapper{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100vw;
  height:100vh;
  margin:0;
}
.v-enter-from{
  opacity:0 !important;
  transform:scale(1.1);
  filter:blur(20px);
}
.v-enter-active{
  transition:1s 1s;
}
img.logo{
  animation:1.5s logoIn;
  width:200px;
  height:auto;
  fill:#fff;
  z-index:50;
}
.arrow{
  left:calc(50vw - 10.7071px);
  position:absolute;
  content:"";
  width:20px;
  height:20px;
  border-right:3px solid #fff;
  border-bottom:3px solid #fff;
  transform:rotate(45deg);
  animation:arrow 1.5s 1s infinite;
  opacity:0;
  bottom:10vh;
}
</style>