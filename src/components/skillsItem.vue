<script setup>
    const props=defineProps({icon:String,category:String,title:String})
</script>
<template>
    <div class="item">
        <Icon :icon="icon"/>
        <div class="desc">
            <p>{{category}}</p>
            <h5 v-html="title"/>
        </div>
    </div>
</template>
<style scoped>
.iconify{
    margin:auto;
    width:3rem;
    height:auto;
}
.item{
    grid-template-columns:6rem calc(100% - 6rem);
    display:grid;
    grid-auto-flow:column;
    width:min(500px,calc(90vw - .5rem));
    margin-block:.5vh;
    margin-inline:.5rem;
    padding-block:1vh;
    background:rgb(var(--bg));
    border-radius:10px;
    justify-content:center;
    box-shadow:0 0 8px 3px rgba(var(--fg),.5);
}
.desc{
    margin-block:auto;
    margin-left:.5rem;
    position:relative
}
.desc::before{
    content:"";
    display:inline-block;
    background:rgb(var(--fg));
    width:2px;
    height:4vh;
    position:absolute;
    top:calc(50% - 2vh + 0.12rem);
    left:-.6rem;
}
p{
    margin:0;
}
h5{
    margin:0;
    font-size:1.5rem;
}
</style>