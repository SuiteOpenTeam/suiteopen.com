<template>
    <div class="full-bg">
        <img v-show="data.banner.img" :src="data.banner.img"/>
        <div class="layout-mid banner">
            <p>{{ data.banner.subject }}</p>
            <p class="strong" v-html="data.banner.type">
                
            </p>
            <p>{{ data.banner.desc }}</P>
        </div>
    </div>
    <div class="light-bg">
        <div class="layout-mid">
            <div class="improve">
            <p class="improve-title">
                {{ data.trends.title }}
            </p>
               {{ data.trends.text }}<br/>
            <!-- <a class="v-btn mt-20" href="/contact">LEARN MORE</a> -->
            </div>
        </div>
    </div>
    <div >
        <div class="layout-mid we-help">
            <div class="help-left">
                <p class="help-title">{{ data.wehelp.title }}</p>
                <p class="help-text">{{ data.wehelp.desc }}</p>
                <p class="help-sub">We can help you:</p>
                <ol class="help-items">
                    <li v-for="item in data.wehelp.items">{{ item }}</li>
                </ol>
            </div>
            <div class="help-right">
                <img :src="data.wehelp.img"/>
            </div>
        </div>
    </div>
    <div class="light-bg">
        <div class="layout-mid">
        <p class="improve-title">Navigate change and plot a path to success</p>
        <p class="text">Our team has helped clients implement the right technology to proactively identify issues, take action, and stay profitable. No matter your stage of growth, we’re here to help.</p>
            <div class="p-flex">
                <div class="flex-item">
                    <img src="/asset/all-in.webp" />
                    <p>Proven consumer goods industry experience</p>
                </div>
                    <div class="flex-item">
                    <img src="/asset/services.webp" />
                    <p>Smart, lean methodology</p>
                </div>
                    <div class="flex-item">
                    <img src="/asset/plan.webp" />
                    <p>Passion for innovation</p>
                </div>
                    <div class="flex-item">
                    <img src="/asset/protect.webp" />
                    <p>The right connections</p>
                </div>
            </div>
        </div>
    </div>
    <div >
        <div class="layout-mid we-help">
            <div class="help-left">
                <p class="help-title">Customer Stories</p>
                <p class="customer-name">{{ data.customer.project }}</p>
                <p class="customer-talk">{{ data.customer.text }}</p>
                <a class="v-btn" v-if="data.customer.btn" :href="data.customer.btn.link">{{ data.customer.btn.text }}</a>
            </div>
            <div class="help-right">
                <img :src="data.customer.img"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['pageData'])
const data = props.pageData;
</script>
<style scoped>
.customer-name{
    font-weight: 600;
    font-size: 25px;
    padding: 10px 0;
    border-bottom: 1px solid var(--color-primary);
}
.customer-talk{
    margin: 20px 0;
    font-style: italic;
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
.light-bg{
    color: #f7f7f7;
}
.we-help{
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
}
    .p-flex{
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
    }
    .flex-item{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
    }
    .flex-item img{
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
    }
    .text{
        width: 70%;
        margin: 20px 0;
    }
    .light-bg{
        background:var(--light-bg);
        padding: 30px 0;
        margin-bottom: 30px;
    }
    .mt-20{
        margin-top: 20px;
    }
    .improve{
        width: 50%;
        padding: 30px 0;
    }
    .improve-title{
        margin-bottom: 30px;
        color:var(--color-primary);
        font-size: 32px;
        font-weight: 300;
        line-height: 1;
    }
    .strong{
        font-size: 38px;
        margin: 10px 0;
        font-weight: 300;
    }
    .banner{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
    }
    .full-bg{
        height: 300px;
        position: relative;
    }
    .full-bg img{
        z-index: -100;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>