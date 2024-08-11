---
title: Success Story
---
<div class="light-bg">
<div class="layout-mid ">
   <p class="header-title">SUCCESS STORY</p>
   <p class="header-name">{{ pageData.project }}</p>
</div>
</div>
<div class="layout-mid overview">
   <div class="intro">
       <p class="intro-title">Overview</p>
       <p class="intro-text">{{ pageData.overview }} </p>
   </div>
   <div class="profile">
       <p class="profile-title">Customer Profile</p>
       <p class="profile-item"><span>Name:</span> {{ pageData.profile.name }}</p>
       <p class="profile-item"><span>Location:</span> {{ pageData.profile.location }}</p>
       <p class="profile-item"><span>Industry:</span> {{ pageData.profile.industry }}</p>
   </div>
</div>
<div class="linear-bg h-40">
   <div class="layout-mid white-text">{{ pageData.target }}</div>
</div>
<div >
    <div class="layout-mid we-help">
        <div class="help-left">
            <p class="help-title">{{ pageData.before.title }}</p>
            <p class="help-sub">{{ pageData.before.subTitle }}</p>
            <ol class="help-items">
                <li v-for="item in pageData.before.items" v-html="item"></li>
            </ol>
        </div>
        <div class="help-right">
            <img :src="pageData.before.img"/>
        </div>
    </div>
</div>
<div class="linear-bg">
    <div class="layout-mid after">
        <div class="after-left">
            <p class="after-title">{{ pageData.after.title }} </p>
            <ol class="after-items">
                <li v-for="item in pageData.after.items" v-html="item"></li>
            </ol>
        </div>
        <div class="after-right">
            <img :src="pageData.after.img"/>
        </div>
    </div>
</div>


<script setup>
    import { useData } from 'vitepress';
    import config from './case.config';

    const { params } = useData();
    const { pkg } = params.value;

    const pageData = config[pkg];
</script>

<style scoped>
    .h-40{
        
    }
    .white-text{
        color: #fff;
        height: 100%;
        vertical-align: middle;
        font-size: 25px;
        padding: 25px 0;
    }
    .we-help{
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
    }
    .help-sub{
        color: var(--color-primary);
    }
    .help-items li{
    margin-bottom: 15px;
    list-style: decimal;
}
.help-sub{
    margin: 30px 10px;
}
.help-text{
    margin: 10px 0;
}
.help-title{
    color: var(--color-primary);
    font-weight: 300;
    margin-bottom: 20px;
    font-size: 32px;

}
.help-left{
    width: 46%;
}
.help-right{
    width: 46%;
    position: relative;
}
.help-right img{
    width: 100%;
    height: auto;
}
.after{
    color: #fff;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
}
 .after-sub{
        color:#fff;
    }
    .after-items li{
    margin-bottom: 15px;
    list-style: decimal;
}
.after-sub{
    margin: 30px 10px;
}
.after-text{
    margin: 10px 0;
}
.after-title{
    color:#fff;
    font-weight: 300;
    margin-bottom: 20px;
    font-size: 32px;

}
.after-left{
    width: 46%;
}
.after-right{
    width: 46%;
    position: relative;
}
.after-right img{
    width: 100%;
    height: auto;
}
    .light-bg{
        background: #f7f7f7;
    }
    .overview{
        display: flex;
        justify-content: space-between;
    }
    .intro {
        width: 65%;
    }
    .intro-title{
        font-size: 32px;
        color: var(--color-primary);
        font-weight: 300;
    }
    .intro-text{
        margin: 25px 0;
    }
    .profile{
        width: 25%;
        padding:0 30px;
        border-left: 1px solid var(--color-primary);
        margin-bottom: 30px;
    }
    .profile-title{
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 20px;
        color: var(--color-primary)
    }
    .profile-item {
        margin-bottom: 10px;
        color: var(--color-primary);
    }
    .profile-item span{
        font-weight: 800;
        font-size: 16px;
    }
    .header-title{
        color: #1eb4e6;
        font-size: 17px;
        margin-bottom: 25px;
        padding-top: 25px;
    }
    .header-name{
        color: var(--color-primary);
        font-size: 42px;
        margin-bottom: 30px;
        padding-bottom: 25px;
    }
    .linear-bg{
        background: linear-gradient(90deg, rgba(21, 50, 153, 1) 0%, rgba(85, 177, 225, 1) 100%);
    }
</style>