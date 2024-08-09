<script setup>
import { useData } from 'vitepress'
import VPNav from './components/VPNav.vue';
import VPFooter from './components/VPFooter.vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();

</script>

<template>
  <div >
    <VPNav />
    <Content />
    <VPFooter />
  </div>
</template>
