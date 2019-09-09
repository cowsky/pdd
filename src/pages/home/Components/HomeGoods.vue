<template>
    <div id="goodsBox">
        <div @click="routerTo(item.id)" class="good-box" v-for="item in goodsMsg" :value="item.id">
            <div class="left-box">
                <img :src="item.goodImg" alt="">
            </div>
            <div class="right-box">
                <div class="good-desc">{{item.goodDesc}}</div>
                <div class="other-desc">
                    <div class="good-price-pin">
                        <span class="rmb-symbol">￥</span>
                        <span class="good-price">{{item.goodPrice}}</span>
                        <span class="good-pin">{{item.goodPin}}</span>
                    </div>
                    <div class="uesr-pic">
                        <img v-for="itemson in item.userImgs" :src="itemson" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeGoods.vue",
        props:{
            goodsMsg:Array
        },
        methods:{
            routerTo(goodId){
                this.$router.push({
                    name:'GoodsDetail',
                    query:{
                        id:goodId
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #goodsBox{
        margin-bottom: 0.58rem;
    }
    .good-box{
        padding: 0.06rem 0 0 0.12rem;
        background: #fff;
        display: flex;
    }
    .left-box{
        width:1.56rem;
        height: 1.56rem;
    }
    .left-box img{
        width: 100%;
    }
    .right-box{
        flex:1;
        padding: 0.04rem 0.12rem 0 0.08rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom:1px solid #e5e5e5;
    }
    .good-desc{
        font-size: 0.14rem;
        line-height: 0.2rem;
        max-height: 0.4rem;
        overflow: hidden;
    }
    .other-desc{
        height: 0.36rem;
        display: flex;
        justify-content: space-between;
    }
    .good-price-pin{
        height: 0.2rem;
        color: #e02e24;
        font-size: 0.18rem;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,Roboto;
    }
    .rmb-symbol{
        font-size: 0.12rem;
    }
    .good-price{
        font-weight: 500;
        line-height: 1;
    }
    .good-pin{
        font-size: 0.13rem;
        color: #9c9c9c;
    }
    .uesr-pic{
        width: 0.2rem;
        height: 0.2rem;
        position: relative;
    }
    .uesr-pic>img{
        position: absolute;
        top:0;
        margin-top: 0.04rem;
        width: 0.2rem;
        border-radius: 50%;
        border: 1px solid rgb(255, 255, 255);
    }
    .uesr-pic>img:first-child{
        left: -0.1rem;
    }
    .uesr-pic>img:last-child{
        left: 0;
    }

</style>