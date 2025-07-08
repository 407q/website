<script setup lang="ts">
import {ref,onMounted} from "vue";
import {useRoute} from "vue-router";
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
});
const route=useRoute();
</script>
<template>
    <Transition>
      <header v-if="route.path!='/'">
        <svg viewBox="0 0 242.6 153" aria-label="32ma.me ロゴ"><use href="/img/logo.svg#logo"/></svg>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about" title="自己紹介">About</RouterLink>
            <RouterLink to="/blogs" title="ブログ">Blogs</RouterLink>
            <RouterLink to="/skills" title="資格・できること">Skills</RouterLink>
            <RouterLink to="/links" title="SNS等">Links</RouterLink>
          </nav>
      </header>
    </Transition>
    <RouterView v-slot="{Component}">
      <Transition name="page">
        <component :is="Component"/>
      </Transition>
    </RouterView>
    <Transition>
      <button 
        class="back" 
        @click="scrollBack" 
        v-show="backShow"
        aria-label="ページの先頭に戻る"
        type="button"
      >
        <span class="sr-only">ページの先頭に戻る</span>
      </button>
    </Transition>
    <footer>
        <p>Copyright © 2023-{{new Date().getFullYear()}} Shio Nakamura</p>
    </footer>
</template>
<style scoped>
@media screen and (max-width:649px){
  header{
    flex-direction:column;
    justify-content:center;
    height:8rem;
  }
  main{
    padding-top:8rem;
    min-height:calc(100vh - 9rem - 55px);
  }
}
@media screen and (min-width:650px){
  header{
    flex-direction:row;
    justify-content:space-between;
    height:4rem;
  }
  main{
    padding-top:4rem;
    min-height:calc(100vh - 5rem - 55px);
  }
}
header{
    display:flex;
    width:80vw;
    background:rgba(var(--bg),.9);
    backdrop-filter:blur(5px);
    position:fixed;
    top:0;
    left:0;
    padding-inline:10vw;
    align-items:center;
    border-bottom:1px solid rgb(var(--fg));
}
header svg{
  height:3.5rem;
}
header div{
    display:flex;
    height:1rem;
    justify-content:center;
    flex-wrap:wrap;
    gap:.7rem;
    margin-bottom:.9rem;
}
/* navタグに変更 */
header nav{
    display:flex;
    height:1rem;
    justify-content:center;
    flex-wrap:wrap;
    gap:.7rem;
    margin-bottom:.9rem;
}
header a{
    font-family:"tt-commons-pro",sans-serif;
    display:inline-block;
    text-decoration:none;
    transition:none;
}
header a::after{
    content:"";
    position:relative;
    bottom:.9rem;
    display:inline-block;
    height:1px;
    width:0px;
    background:rgb(var(--fg));
    transition:.2s;
}
header a:hover{
    opacity:1;
}
header a:hover::after{
    width:100%;
}
.router-link-active::after{
    width:100%;
    height:2px;
}
.page-enter-active{
  transition:.2s ease;
}
.page-enter-from{
  opacity:0;
}
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
  border:1px solid rgba(var(--fg),0);
  cursor:pointer;
  transition:.1s;
}
.back::after{
  display:block;
  content:"";
  width:15px;
  height:15px;
  border-left:3px solid rgb(var(--fg));
  border-top:3px solid rgb(var(--fg));
  transform:translate(10px,7px) rotate(45deg);
  transition:.2s;
}
.back:hover{
  background:rgb(var(--bg));
  border-color:rgba(var(--fg),.5);
}
.back:hover::after{
  transform:translate(10px,4px) rotate(45deg);
}
footer p{
  font-family:"tt-commons-pro",sans-serif;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>