---
title:  NetSuite ERP Cloud  Solutions
---

<div class="full-bg">
   <div class="layout-mid w-1200">
      <div class="slogn">
        <p class="slogn-text" 
            v-motion 
            :initial="{
            opacity: 0,
            x: 100
            }"
            :enter="{
            opacity: 1,
            x: 0,
            transition: {
                delay: 150,
                duration: 750
            }
            }"
        >
            Redefining the<br>
            Future of Mining with<br>
            Next-Gen Technology
        </p>
        <div 
        v-if="home.caseOne"
        v-motion 
            :initial="{
            opacity: 0,
            y: 100
            }"
            :enter="{
            opacity: 1,
            y: 0,
            transition: {
                delay: 250,
                duration: 750
            }
            }"
        >
            <p class="customer-text"> {{ home.caseOne.name }}</p>
            <p class="mt-16">{{ home.caseOne.desc }}</p>
            <a class="button" :href="home.caseOne.link">READ CASE STUDY</a>
        </div>
      </div>
   </div>
</div>
<div class="grad-bg">
   <div class="layout-mid">
       <p class="h3">
           {{ home.welcome }}
       </p>
   </div>
</div>
<div class="p-30">
   <div class="layout-mid p-15">
       <p class="read-text">
          {{ home.solution.title }}
       </p>
       <p class="read-head">
          {{ home.solution.subTitle }}
       </p>
       <ul class="s-ul">
          <li class="s-li" v-for="item in home.solution.items">
              <p class="s-title">{{item.title}}</p>
              <p class="s-desc">{{item.desc}}</p>
          </li>
       </ul>
   </div>
    <div class="p-30 grad-bg" v-if="home.evalaute">
      <div class="layout-mid p-15 flex">
          <img src="/quote-icon.webp" width="150" height="150" />
          <div class="story">
              <p class="said">
              <i>
              {{ home.evalaute.text }}
              </i>
              </p>
              <p class="who"><strong>{{ home.evalaute.person }}</strong></p>
          </div>
      </div>
    </div>
   <div class="p-30 bg-gray">
      <div class="layout-mid p-15">
         <p class="read-text">
            {{ home.industry.title }}
        </p>
        <p class="read-desc"> {{ home.industry.subTitle }}</p>
        <div class="industry-wrapper">
            <div class="industry-container" v-for="(item,i) in home.industry.items">
                 <div class="hover-box hover-front" :class="`bg-img-`+(i+1)" >
                    <div class="text-wrap">
                        {{item.title}}
                    </div>
                </div>
                <div class="hover-box hover-back">
                    <p class="hover-title">{{item.title}}</p>
                    <p class="hover-text">{{item.desc}}</p>
                    <a class="button" :href="item.link" >EXPLORE</a>
                </div>
            </div>
        </div>
      </div>
   </div>
</div>



<script setup>
import { useData } from 'vitepress';

const { theme } = useData();
const { home } = theme.value;
</script>

<style scoped>
.full-bg{
    background: url('./banner.png');
    height: 600px;
    background-position: center;
    display: flex;
    align-items: center;
}
.slogn{
    width: 600px;
    box-sizing: border-box;
    padding: 38px 60px;
    background: #fff;
    border-radius: 4px;
    float: left;
}
.slogn-text{
    font-size: 40px;
    font-weight: 200;
    color: var(--color-primary);
    font-family: var(--font-heading);
}
.w-1200{
    width: 1200px;
}
.customer-text{
    color: var(--color-text);
    font-weight: 500;
    margin-top: 12px;
    font-size: 12px; 
}
.mt-16{
    margin-top: 16px;
}
.button{
    display: inline-block;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-align: center;
    padding: 5px 8px;
    font-size: 14px;
    border-radius: 2px;
    transition: .3s;
    margin-top: 22px;
}
.button:hover{
    background: var(--color-primary);
    color: #fff;
}
.grad-bg{
    background: linear-gradient(90deg, rgba(21, 50, 153, 1) 0%, rgba(85, 177, 225, 1) 100%) !important;
    padding: 30px 0;
}
.h3{
    width: 80%;
    color: #fff;
    font-size: 26px;
    font-weight: 600;
    line-height: 38px;
}
.p-30{
    padding: 30px 0;
}
.p-15{
    padding: 15px;
}
.read-text{
    font-size: 32px;
    font-weight: 300;
    color: var(--color-primary);
    margin-bottom: 16px;
}
.read-head{
    font-weight: 600;
    font-size: 18px;
    color: var(--color-primary);
    margin-bottom: 16px;
}
.s-ul{
    border: 1px solid var(--color-primary);
    display: flex;
    height: 270px;
    margin-bottom: 20px;
}
.s-li{
    width: 33.33%;
    height: 100%;
    cursor:pointer;
    border-right: 1px solid var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.s-li:hover {
    background: #f6f6f6;
}
.s-li:hover .s-desc{
    display: block;
}
.s-desc{
    display: none;
}
.s-title{
    font-size: 26px;
    color: var(--color-primary);
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 300;
}
.s-li:nth-of-type(3){
    border: none;
}
.s-li p{
    text-align: center;
    width: 80%;
}
.read-desc{
    width: 70%;
    margin-bottom: 35px;
}
.bg-gray{
    background: #f7f7f7;
}
.industry-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.industry-container{
    height: 270px;
    margin-bottom: 20px;
    width: 48%;
    position: relative;
}
.hover-box{
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform .5s ease-in-out;
    transform-style: preserve-3d;
    background-size: cover;
    background-position: center;
}
.text-wrap{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #00000060;
}
.hover-front{
    color:#fff;
    font-size: 42px;
    font-weight: 300;
    align-items: center;
    transform: rotateY(0);
}
.industry-container:hover .hover-front{
    transform: rotateY(-180deg);
}
.industry-container:hover .hover-back{
    transform: rotateY(0deg);
}
.hover-back{
    transform: rotateY(180deg);
    align-items: center;
    background: #fff;
}
.hover-title{
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 300;
    color: var(--color-primary);
}
.hover-text{
    text-align:center;
    line-height: 20px;
    margin-bottom: 20px;
    width: 80%;
}
.bg-img-1{
    background: url(./img-industries-1.webp);
     background-size: cover;
    background-position: center;
}
.bg-img-2{
    background: url(./img-industries-2.webp);
     background-size: cover;
    background-position: center;
}
.bg-img-3{
    background: url(./img-industries-3.webp);
     background-size: cover;
    background-position: center;
}
.bg-img-4{
    background: url(./img-industries-4.webp);
     background-size: cover;
    background-position: center;
}
.flex{
    display: flex;
    align-items: center;
}
.story{
    margin-left: 20px;
    width: 570px;
    color: #fff;
}
.said{
    margin-bottom: 20px;
}

</style>