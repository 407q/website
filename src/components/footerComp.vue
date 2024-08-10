<template>
    <footer>
        <div class="links">
            <a href="https://twitter.com/32ma_me" title="X(Twitter)"><Icon icon="simple-icons:x"/></a>
            <a href="https://misskey.io/@mwxdxx" title="Misskey.io"><Icon icon="simple-icons:misskey"/></a>
            <a href="https://youtube.com/@32ma_me" title="YouTube"><Icon icon="simple-icons:youtube"/></a>
            <a href="https://note.com/32ma_me" title="note"><Icon icon="dashicons:welcome-write-blog"/></a>
            <a href="mailto:contact@32ma.me" :title="$t('contacts.mail')"><Icon icon="tabler:mail-filled"/></a>
        </div>
        <p>Copyright © 2023-{{new Date().getFullYear()}} Shio Nakamura</p>
        <div class="locale-changer">
            <label for="lang">表示言語/Language:</label>
            <select id="lang" v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{locale}}</option>
            </select>
        </div>
    </footer>
</template>
<style scoped>
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
.locale-changer{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
</style>