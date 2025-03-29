<template>
    <main>
        <h1>Links</h1>
        <p style="margin-top:0;text-align:center;font-weight:300">SNS等</p>
        <div class="wrapper">
            <div class="block">
                <Icon icon="fa6-brands:square-x-twitter"/>
                <p>X (twitter) …… <a href="https://x.com/32ma_me">@32ma_me</a></p>
            </div>
            <div class="block">
                <Icon icon="fa6-brands:youtube"/>
                <p>YouTube …… <a href="https://youtube.com/@32ma_me">@32ma_me</a></p>
            </div>
            <div class="block">
                <Icon icon="fa6-brands:github"/>
                <p>GitHub …… <a href="https://github.com/32ma-me">32ma-me</a></p>
            </div>
            <div class="block">
                <Icon icon="fa6-brands:keybase"/>
                <p>Keybase …… <a href="https://keybase.io/32ma_me">32ma_me</a></p>
            </div>
            <div class="block">
                <Icon icon="fa6-solid:envelope"/>
                <p>メール …… <a href="mailto:contact@32ma.me">contact@32ma.me</a></p>
            </div>
        </div>
    </main>
</template>
<style scoped>
.wrapper{
    width:fit-content;
    margin-inline:auto;
}
.block{
    display:flex;
    gap:.5rem;
    align-items:center;
    margin-block:.5rem;
}
.block p{
    margin:0;
}
.iconify{
    display:inpne;
    width:1.8rem;
    height:1.8rem;
}
</style>