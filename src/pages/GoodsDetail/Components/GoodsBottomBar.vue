<template>
    <div id="Gooddetail-footer-bar" >
        <div class="g-home-button left-button">
            <img src="//t13img.yangkeduo.com/cart/2018-09-02/40e2c153f09720b43044dfa82f771714.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" alt="">
            <span>更多</span>
        </div>
        <div class="g-unlike-button left-button">
            <img src="//t13img.yangkeduo.com/cart/2018-09-02/40e2c153f09720b43044dfa82f771714.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" alt="">
            <span>客服</span>
        </div>
        <div class="g-chat-button left-button">
            <img src="//t13img.yangkeduo.com/cart/2018-09-02/40e2c153f09720b43044dfa82f771714.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" alt="">
            <span>收藏</span>
        </div>
        <div class="g-direct-button right-button">
            <span>￥{{price.alonePrice}}</span>
            <span>单独购买</span>
        </div>
        <div class="g-group-button right-button" @click="showpop">
            <span>￥{{price.pinPrice}}</span>
            <span>发起拼单</span>
        </div>
    </div>

</template>

<script>
    import axios from "axios"
    export default {
        name: "Goods-bottom-bar",
        props:["popSwitch","goodsprice"],
        data(){
            return{
                switch:false,
                price:{}
            }
        },
        methods:{
            showpop(){
                // axios.get("/static/data/package.json").then(this.getDataSucc);
                this.$emit("changetrue");
            },
            // getDataSucc(res){
            //     if(res.data){
            //         for(let i=0; i<res.data.selectorInfo.length; i++){
            //             if(res.data.selectorInfo[i].id == this.$route.query.id){
            //                 let skuInfo = res.data.selectorInfo[i];
            //                 this.$bus.emit("toAddSelectInfo",skuInfo);
            //             }
            //         }
            //     }
            // }
        },
        mounted() {
            this.price=this.goodsprice;
        }
    }
</script>

<style scoped>
    #Gooddetail-footer-bar{
        position: fixed;
        bottom:0;
        height: 0.54rem;
        display: flex;
        text-align: center;
        width: 100%;
    }
    .left-button{
        border-top:1px solid #eaeaea;
        font-size: 0.11rem;
        background: #fff;
    }
    .left-button img{
        width: 0.23rem;
        vertical-align: middle;
        margin:0.06rem 0 0.02rem;
    }
    .left-button span{
        width: 100%;
        display: inline-block;
    }
    .right-button{
        font-size: 0.15rem;
        flex:1;
        color:#fff;
        padding-top:0.04rem;
    }
    .right-button span{
        display: block;
        margin-top: 0.06rem;
        line-height: 0.15rem;
    }

    .g-direct-button{
        background: #f3aba7;
    }
    .g-group-button{
        background: #e02e24;
    }
</style>