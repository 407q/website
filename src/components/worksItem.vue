<script setup>
    import {ref} from "vue";
    const props=defineProps({left:String,category:String,title:String,desc:String});
</script>
<template>
    <div class="item">
        <component :is="left.split('|')[0]" :src="left.split('|')[1]"/>
        <div class="content">
            <h5>{{category}}</h5>
            <h4>{{title}}</h4>
            <p>{{desc}}</p>
        </div>
    </div>
</template>
<style scoped>
@media screen and (max-width:649px){
    iframe{
        width:calc(90vw - 1rem);
        height:calc((90vw - 1rem)/16*9);
    }
    img{
        max-width:calc(90vw - 1rem);
        justify-self:center;
    }
    .item{
        grid-auto-flow:row;
    }
}
@media screen and (min-width:650px){
    iframe{
        width:320px;
        height:180px;
    }
    img{
        max-width:320px;
        justify-self:center;
    }
    .item{
        grid-auto-flow:column;
    }
}
iframe{
    border:none;
    align-self:center;
}
.iconify{
    margin:auto;
    width:3rem;
    height:auto;
}
.item{
    grid-template-columns:320px auto;
    display:grid;
    grid-gap:1rem;
    max-width:calc(90vw - .5rem);
    margin-block:.5vh;
    margin-inline:.5rem;
    padding-block:1vh;
    justify-content:center;
}
h4{
    font-size:1.7rem;
    margin:0;
}
span{
    text-align:center;
}
.content{
    align-self:center;
    margin-block:auto;
    position:relative;
    padding-bottom:1rem;
}
p{
    margin:0;
}
h5{
    margin:0;
    font-weight:450;
    font-size:1.2rem;
}
</style>