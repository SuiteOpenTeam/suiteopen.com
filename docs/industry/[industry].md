---
title: Industries Solutions
---

<solution-component :page-data="pageData" />

<script setup>
import config from './industry.config';
import { useData } from 'vitepress';

const { params, title } = useData();

const pageData = config[params.value?.industry];


</script>