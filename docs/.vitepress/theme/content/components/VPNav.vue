<template>
   <div class="header-inner container">
      <div class="site-branding">
         <a :href="theme.logoLink" class="logo">
             <img :src="theme.logo" alt="SuiteOpen">
             <span class="logo-text">SUITEOPEN</span>
         </a>
      </div>
      <nav class="main-navigation">
         <ul class="menu nav-menu">
            <li class="megamenu" v-for="item in theme.nav">
               <a :href="item.link" class="black">{{ item.text }}</a>
               <ul class="sub-menu" v-if="item?.sublist">
                  <li v-for="subItem in item.sublist">
                    <div class="sub-title">{{ subItem.text }}</div> 
                    <a @click="hidePanel" class="item-detail" :href="item2.link" v-for="item2 in subItem.items">
                        {{ item2.text }}
                    </a>
                  </li>
               </ul>
            </li>
         </ul>
      </nav>
      <div style="width: auto;
            flex-grow: 0;"></div>
   </div>
</template>
<script setup>
import { useData } from 'vitepress';

const { theme } = useData();

const hidePanel = (e) => {
    const subMenu = e.target.parentNode.parentNode;
    subMenu.classList.add('hide');
    setTimeout(() => {
      subMenu.classList.remove('hide');
    })
}


</script>
<style scoped>
.hide{
   visibility: hidden !important;
}
.black{
   color: #333;
}
.header-inner{
    height: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
 .site-branding {
   flex-grow: 0;
}
a.logo{
   display: flex;
   align-items: center;
   text-decoration: none;
}
.site-branding .logo-text{
   color: var(--color-primary);
   font-size: 26px;
   font-weight: 700;
   margin-left: 10px;
   border-bottom: 1px solid transparent;
}
 .site-branding img{
   height: 80px;
   width: auto;
   vertical-align: middle;
   padding: 18px 0;
   box-sizing: border-box;
}
.header-spacer {
   flex-grow: 1;
   flex-shrink: 2;
   display: block;
}
.main-navigation {
   width: auto;
   height: 80px;
   display: table;
   flex-grow: 0;
}
.main-navigation .menu {
   display: table-row;
   margin: 0;
   max-height: none;
   overflow: visible;
}
.main-navigation .menu > li{
   padding: 0 12px;
   display: table-cell;
   vertical-align: middle;
   font-size: 16px;
   position: relative;
}
.main-navigation .menu > li > a {
   line-height: 1.5em;
   letter-spacing: 0.03em;
   font-weight: 400;
   padding: 0.5em 0;
   border-bottom: 1px solid transparent;
   position: relative;
}
.main-navigation .menu > li > a::after{
   content: "";
   background: none repeat scroll 0 0 var(--color-primary);
   bottom: 0;
   display: block;
   height: 2px;
   left: 50%;
   position: absolute;
   transition-duration: 0.4s;
   transition-timing-function: ease-in-out;
   transition-property: width, left, background-color;
   width: 0;
}
.main-navigation .menu > li:hover a::after{
   width: 60%;
   left: 20%;
}
.main-navigation .menu > li:hover .sub-menu{
   opacity: 1;
   visibility: visible;
}
.sub-menu{
   left: 50%;
   transform: translateX(-50%);
   top: 100%;
   display: flex;
   position: absolute;
   z-index: 999;
   padding-top: 14px;
   padding-left: 0;
   opacity: 0;
   transition-property: opacity;
   transition-duration: .5s;
   transition-timing-function: ease-in-out;
   background: rgba(255,255,255);
   /* backdrop-filter: blur(4px); */
   border: 1px  solid rgba(239,239,245);
   border-radius: 12px;
   visibility: hidden;
   box-shadow: 0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04);;
}
.sub-menu li{
   width: 325px;
   padding: 5px;
}
.sub-menu li:not(:nth-of-type(1)){
   margin-left: 20px;
}
.sub-title{
   background: #f6f6f6;
   color: var(--color-primary);
   padding: 8px;
   font-size: 14px;
   font-weight: 500;
   cursor: pointer;
}
.sub-title:hover{
   background-color: var(--color-primary);
   color: #fff;
}
.item-detail{
   padding: 8px;
   display: block;
   font-size: 13px;
   color: #333;
   /* transition-property: border-left ;
   transition-duration: .2s;
   transition-timing-function: linear; */
}
.item-detail:hover{
   border-left: 2.5px solid var(--color-primary);
}


</style>