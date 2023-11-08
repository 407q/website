<template>
    <footer>
        <div class="links">
            <a href="https://twitter.com/32ma_me" title="X(Twitter)"><Icon icon="simple-icons:x"/></a>
            <a href="https://misskey.io/@mwxdxx" title="Misskey.io"><Icon icon="simple-icons:misskey"/></a>
            <a href="https://youtube.com/@32ma_me" title="YouTube"><Icon icon="simple-icons:youtube"/></a>
            <a href="https://note.com/32ma_me" title="note"><Icon icon="dashicons:welcome-write-blog"/></a>
            <a href="mailto:contact@32ma.me" title="メール"><Icon icon="tabler:mail-filled"/></a>
        </div>
        <p>Copyright © 2023-{{new Date().getFullYear()}} Shio Nakamura</p>
    </footer>
</template>
<style scoped>
footer{
  margin-top:5vh;
  text-align:center;
}
footer p{
    margin:.2rem;
}
.links{
    display:flex;
    justify-content:center;
}
.iconify{
    width:1.5rem;
    height:auto;
    margin-inline:.2em;
}
</style>