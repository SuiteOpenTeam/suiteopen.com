<template>
    <div class="footer">
        <div class="content">
            <img src="/logo.png" class="logo" alt="">
            <span>{{ footer.copyright }}</span>
            <span class="vertical">|</span>
            <a v-for="item in footer.terms" :href="item.link">{{ item.text }}</a>
            <span class="vertical">|</span>
            Contact: 
            <template v-if="footer.contact.phone">
                {{ footer.contact.phone }}
                .
            </template>
            <a :href="`mailto:`+footer.contact.email">{{ footer.contact.email }}</a>
        </div>
    </div>
</template>
<script setup>
import { useData } from 'vitepress';

const { theme } = useData();
const { footer } = theme.value;

</script>
<style scoped>
.footer{
    background-color: #f7f7f7;
    padding: 20px;
    display: flex;
}
.content{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: #333;
    font-size: 14px;
}
a{
    color: var(--color-primary);
    margin-left: 8px;
    text-decoration: none;
}
.logo{
    height: 32px;
    margin-right: 10px;
}
.vertical{
    margin: 0 8px;
}
</style>