<template>
    <div id="top">
      <a href="https://note.com/32ma_me/n/nf22ffff313a0" target="_blank" rel="noreferrer noopener"><img src="/img/topimage.webp" alt="プロフィール画像" :title="$t('tophover')"></a>
      <h1>
        中村 栞<br>
        <span class="sub">Shio Nakamura / 32ma.me</span>
      </h1>
      <span class="arrow"/>
    </div>
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
#top{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height:90vh;
  margin-bottom:10vh;
}
.arrow{
  position:absolute;
  content:"";
  width:20px;
  height:20px;
  border-right:3px solid rgb(var(--fg));
  border-bottom:3px solid rgb(var(--fg));
  animation:arrow 1.5s infinite;
  bottom:10vh;
}
img{
  border:0 solid rgb(var(--bg));
  outline:3px solid rgb(var(--fg));
  border-radius:50%;
  width:200px;
  height:auto;
}
a,img{
  transition:.5s;
}
a:hover{
  opacity:1;
  transform:scale(1.1);
}
a:hover img{
  border:10px solid rgb(var(--bg));
  outline:7px solid rgb(var(--fg));
}
h1{
  margin-top:1em;
  margin-bottom:1.5rem;
  line-height:1.2em;
}
.sub{
  border:none;
  padding:0;
  text-align:center;
  font-weight:360;
  font-size:1.5rem;
}
</style>