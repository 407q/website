<script setup lang="ts">
import {useHead} from "@unhead/vue";
useHead({
  title:"Shio Nakamura / 32ma.me",
  titleTemplate:""
})
</script>

<template>
  <main>
    <div class="avatar">
      <img alt="プロフィール写真" src="/img/avatar.webp">
    </div>
    <div>
      <svg viewBox="0 0 242.6 153" aria-label="32ma.me ロゴ"><use href="/img/logo.svg#logo"/></svg>
      <h1>
        中村 栞 <wbr><span class="sub">Shio Nakamura</span>
      </h1>
      <nav aria-label="メインナビゲーション">
        <a href="/about"><h2>About</h2> 自己紹介</a>
        <a href="/blogs"><h2>Blogs</h2> ブログ</a>
        <a href="/skills"><h2>Skills</h2> 資格・できること</a>
        <a href="/links"><h2>Links</h2> SNS等</a>
      </nav>
    </div>
  </main>
</template>

<style scoped>
@keyframes avatar-back{
  from,to{
    background:rgb(var(--sub));
  }
  50%{
    background:rgba(var(--sub),0.5);
  }
}
@media screen and (max-width:749px){
  main{
    flex-direction:column;
    gap:20px;
    min-height:calc(100vh - 3rem);
  }
}
@media screen and (min-width:750px){
  main{
    flex-direction:row;
    gap:50px;
    min-height:calc(100vh - 3rem);
  }
}
main{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0;
}
.avatar{
  background:rgb(var(--sub));
  animation:3s avatar-back infinite;
  width:22.5rem;
  height:30rem;
  border-radius:5px;
}
img{
  width:100%;
  height:100%;
}
svg{
  display:block;
  height:6rem;
}
h1{
  text-align:left;
  display:inline-flex;
  align-items:baseline;
  flex-wrap:wrap;
  gap:.25em;
  line-height:2rem;
  font-size:2.5rem;
  font-weight:300;
  margin-block:.5rem 1.5rem;
  padding-inline:0;
  border:none;
}
h1 .sub{
  font-size:1.5rem;
}
h2{
  display:inline;
  font-family:"tt-commons-pro",sans-serif;
  font-size:1.6rem;
}
nav{
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex-wrap:wrap;
  gap:.7rem;
  margin-bottom:.9rem;
}
a{
  font-weight:400;
  height:2.5rem;
  line-height:1.5em;
  display:inline-block;
  margin-right:auto;
  text-decoration:none;
  transition:none;
}
a::after{
  content:"";
  position:relative;
  bottom:.9rem;
  display:inline-block;
  height:1px;
  width:0px;
  background:rgb(var(--acc));
  transition:.2s;
}
a:hover{
    opacity:1;
}
a:hover::after{
    width:100%;
}
</style>
