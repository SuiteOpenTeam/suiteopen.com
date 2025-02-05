---
title: About
---

<div class="banner-wrap">
<div class="layout-mid banner-text">About SuiteOpen</div>
</div>
<div >
   <div class="layout-mid talk">
      <div class="talk-right">
       <img src="/asset/about-poised.webp"/>
      </div>
      <div class="talk-left">
          <p class="tl-title">SuiteOpen, Poised to propel you forward.</p>
          <p class="tl-desc">We’re a leading global technology solutions and services provider for cloud application implementation and management. </p>
          <p class="tl-desc">We bring to our clients deep capabilities in implementing and maintaining NetSuite ERP deployments  in a secure and resilient public cloud environment.</p>
          <p class="tl-desc">Our advantage lies in our breadth of expertise and our industry understanding—elements that define our ability to deliver unmatched solutions and services. </p>
      </div>
   </div>
</div>
<div class="light-bg">
<div class="layout-mid talk">
   <div class="history">
      <p class="tl-title">A legacy of excellence</p>
      <p class="tl-desc">For over 14 years, we’ve delivered trusted, tailored NetSuite solutions addressing IT and ERP needs of businesses. We provide industry-specific managed and professional services with an emphasis on various system integration and security.</p>
   </div>
   <div class="history h-flex">
       <div class="h-col" v-for="item in cases">
          <p class="amt">{{item.amt}}</p>
          <p class="subject">{{item.text}}</p>
       </div>
   </div>
</div>
</div>
<div >
   <div class="layout-mid talk">
      <div class="talk-left">
          <p class="tl-title">Our Vision</p>
          <p class="tl-desc">At SuiteOpen, we relentlessly pursue excellence with clients, partners, and employees to become the preferred full-stack technology partner for small and midmarket businesses.</p>
      </div>
       <div class="talk-right">
        <img src="/asset/vision.png"/>
       </div>
   </div>
</div>

<script setup>
    const cases = [
        { text: 'Certifications', amt: '28' },
        { text: 'Countries', amt: '3' },
        { text: 'Local Offices', amt: '2' },
        { text: 'Projects in 2024', amt: '15' },
        { text: 'Active Customers', amt: '46' },
        { text: 'Technical Consultants', amt: '23' },
    ]
</script>

<style scoped>
    .h-flex{
        display: flex;
        flex-wrap: wrap;
    }
    .h-col{
        width: 30%;
        margin-bottom: 20px;
        margin-right: 2%;
    }
    .h-col .amt{
        font-size: 48px;
        color: var(--color-primary);
        font-weight: 300;
    }
    .subject{
        margin-top: 10px;
    }
    .history{
        width: 48%;
    }
    .p-30{
        padding: 30px 0;
    }
    .banner-wrap{
         height: 300px;
        background: url('/asset/aboutbanner.webp');
        background-size: contain 100%;
        background-position: center;
    }
    .banner-text{
        font-size: 36px;
        color: #fff;
        height: 100%;
        align-items: center;
        display: flex;
        font-weight: 300;
    }
.tl-title{
    font-size: 32px;
    color: var(--color-primary);
    margin-bottom: 20px;
    font-weight: 300;
    margin-top: 30px;
}
.tl-desc{
    margin-bottom: 20px;
}
.talk-right img {
    width: 100%;
}

.talk{
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
}
.talk-left{
    width: 50%;
}
.talk-right{
    width: 45%;
}
.light-bg{
    background: var(--light-bg);
}
</style>