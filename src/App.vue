<script setup>
import topSection from "./components/topSection.vue";
import worksSection from "./components/worksSection.vue";
import skillsSection from "./components/skillsSection.vue";
import footerComp from "./components/footerComp.vue";
import{ref,onMounted} from "vue";
const backShow=ref();
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
  <topSection/>
  <main>
    <Transition><span class="back" :title="$t('backtotop')" @click="scrollBack" v-show="backShow"/></Transition>
    <h2 id="about">About</h2>
    <div class="avatar">
      <img src="/img/icon.webp" alt="$t('alts.icon')" :title="$t('alts.icon')">
      <p>
        中村 栞<br>
        <span class="sub">Shio Nakamura / 32ma.me</span>
      </p>
    </div>
    <p v-html="$t('about')"/>
    <h2 id="works">Works</h2>
    <worksSection/>
    <h2 id="skills">Skills</h2>
    <skillsSection/>
  </main>
  <footerComp/>
</template>

<style scoped>
@media screen and (max-width:649px){
  .avatar{
    flex-direction:column;
    text-align:center;
    gap:0;
  }
}
@media screen and (min-width:650px){
  .avatar{
    flex-direction:row;
    gap:50px;
  }
}
h2{
  font-size:2.5rem;
  text-align:center;
  font-weight:500;
  margin-top:3rem;
}
.v-enter-active,.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,.v-leave-to {
  opacity: 0;
}
.avatar{
  display:flex;
  justify-content:center;
  align-items:center;
  margin-block:1.5rem;
}
.avatar img{
  border:0 solid rgb(var(--bg));
  outline:3px solid rgb(var(--fg));
  border-radius:50%;
  width:150px;
  height:150px;
}
.avatar p{
  font-size:3rem;
  font-weight:300;
  line-height:1.2em;
  margin-block:0;
  margin-top:0.7rem;
}
.avatar p .sub{
  margin-top:1rem;
  border:none;
  padding:0;
  font-weight:360;
  font-size:1.5rem;
  display:block;
  line-height:normal;
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
