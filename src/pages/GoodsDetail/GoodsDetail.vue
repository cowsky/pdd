<template>
    <div id="mainBox">
        <div id="main">
            <div class="banner" >
                <img :src="goodDetailInfo.bannerImg" alt="">
            </div>
            <div class="g-top-container">
                <section id="g-base">
                    <div class="g-price-group">
                        <div class="g-price-left">
                            <span class="rmb-symbol">￥</span>
                            <span class="g-new-price">{{goodDetailInfo.newPrice}}</span>
                            <del class="g-old-price">￥<span>{{goodDetailInfo.oldPrice}}</span></del>
                        </div>
                        <div class="g-price-right">
                            <span>{{goodDetailInfo.pinNumInfo}}</span>
                        </div>
                    </div>
                    <div class="g-desc">
                        <span>{{goodDetailInfo.goodDesc}}</span>
                        <span class="g-icon">极速退款</span>
                    </div>
                </section>
                <div class="g-tag">
                    <div class="g-line"></div>
                    <div class="g-services">
                        <div class="g-h-services">极速退款</div>
                        <div class="g-h-services">全场包邮</div>
                        <div class="g-h-services">7天退换</div>
                        <div class="g-h-services">48小时发货</div>
                        <div class="g-h-enter"></div>
                    </div>
                </div>
            </div>
            <div class="g-reviews-module">
                <div class="g-review-total">
                    <div class="g-total-left">全部评价</div>
                    <div class="g-total-right">查看全部</div>
                </div>
                <div class="g-review-tag">
                    <ul class="g-tag-group">
                        <li v-for="item in goodDetailInfo.reviewTags" class="g-tag-item">{{item}}</li>
                    </ul>
                </div>
                <div class="g-review-desc">
                    <div v-for="item in goodDetailInfo.reviewDesc" class="g-review-item">
                        <div class="g-buyer">
                            <img :src="item.userPic" alt="">
                            <span>{{item.userName}}</span>
                        </div>
                        <div class="g-review-content">
                            <span>{{item.reviewContent}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-store">
                <div class="g-store-content">
                    <div class="g-store-left">
                        <img :src="goodDetailInfo.storePic" alt="">
                        <div class="g-store-info">
                            <div class="g-store-name">{{goodDetailInfo.storeName}}</div>
                            <div class="g-store-num">
                                <span>商品数量: {{goodDetailInfo.storeNum}}</span>
                                <span>{{goodDetailInfo.storeNumPin}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="g-store-right">
                        <span>进店逛逛</span>
                    </div>
                </div>
                <ul class="g-store-desc">
                    <li class="g-store-item">描述相符 <span>{{goodDetailInfo.storeDescDegree}}</span></li>
                    <li class="g-store-item">服务态度 <span>{{goodDetailInfo.storeServiceDegree}}</span></li>
                    <li class="g-store-item">物流服务 <span>{{goodDetailInfo.storeLogisticsDegree}}</span></li>
                </ul>
            </div>
            <div class="g-mall-module">
                <ul>
                    <li v-for="item in goodDetailInfo.goodsMall" class="g-mall-item">
                        <div class="g-mall-img">
                            <img :src="item.goodImg" alt="">
                        </div>
                        <div class="g-mall-name">
                            <span>{{item.goodMsg}}</span>
                        </div>
                        <div class="g-mall-info">
                            <div class="g-mall-price">￥<span>{{item.goodPrice}}</span></div>
                            <div class="g-mall-num">{{item.goodPin}}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="g-details">
                <p>商品详情</p>
                <div class="g-details-attr">
                    <div v-for="item in goodDetailInfo.goodsDetailAttr" class="attr-item">
                        <div class="attr-key">{{item.attrKey}}</div>
                        <div class="attr-value">{{item.attrValue}}</div>
                    </div>
                </div>
                <div class="g-details-desc">
                    <div class="g-details-content">{{goodDetailInfo.goodDetailDesc}}</div>
                </div>
            </div>
        </div>
        <goods-bottom-bar @changetrue="handleClickTrue" :goodsprice="goodprice"></goods-bottom-bar>
        <goods-selected @changefalse="handleClickFalse" :goodSelectInfo="goodSelect" v-show="popSwitch" v-if="Object.keys(goodSelect).length != 0" ></goods-selected>
    </div>
</template>

<script>
    import GoodsBottomBar from "./Components/GoodsBottomBar"
    import GoodsSelected from "./Components/GoodsSelected"
    import axios from "axios"

    export default {
        name: "GoodsDetail",
        data(){
            return{
                goodDetailInfo:{},
                popSwitch:false,
                goodprice:{
                    "id":"",
                    "alonePrice":"",
                    "pinPrice":""
                },
                goodSelect:{}
            }
        },
        components:{
            GoodsBottomBar,
            GoodsSelected
        },
        methods:{
            getDetailData(){
                axios.get("/api/tsconfig").then(this.getDetailDataSucc);
            },
            getDetailDataSucc(res){
                if(res.data){
                    let data = res.data.goodsInfo;
                    for(let i = 0; i < data.length; i++){
                        if(data[i].id == this.$route.query.id){
                            this.goodDetailInfo = data[i];
                            this.goodprice.alonePrice=data[i].oldPrice;
                            this.goodprice.pinPrice=data[i].newPrice;
                            this.goodSelect=data[i].goodSelect;
                        }
                    }
                }
            },
            handleClickFalse(){
                this.popSwitch= false;
                document.querySelector("#main").style.position="static";
            },
            handleClickTrue(){
                this.popSwitch= true;
                document.querySelector("#main").style.position="fixed";
            }
        },
        created() {
            this.getDetailData();
            this.goodprice.id=this.$route.query.id;
        }
    }
</script>

<style scoped>
    #main{
        margin-bottom: 0.54rem;
    }
    .banner{
        width: 100%;
        vertical-align: bottom;
        line-height: 0;
    }
    .banner>img{
        width: 100%;
    }
    .g-top-container{
        background: #fff;
        font-size: 0.14rem;
    }
    #g-base{
        padding: .11rem .12rem 0 .1rem;
    }
    .g-price-group{
        height: 0.37rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.37rem;
    }
    .rmb-symbol{
        font-size: 0.15rem;
        color:#e02e24;
    }
    .g-new-price{
        font-size: 0.28rem;
        font-weight: bold;
        color:#e02e24;
    }
    .g-old-price,.g-price-right{
        font-size: 0.13rem;
        color:#58595b;
    }
    .g-desc{
        color:#151516;
        font-size: .15rem;
        line-height: 1.4;
        color: #151516;
        font-weight: 700;
        padding: 0.02rem 0 0.12rem;
    }
    .g-desc .g-icon{
        background: #25b513;
        color:#fff;
        line-height: 0.17rem;
        height: 0.16rem;
        border-radius: 0.02rem;
        font-size: 0.12rem;
    }
    .g-tag{
        line-height: 0.38rem;
    }
    .g-line{
        border:1px solid #f2f2f2;
        margin-top:0.01rem;
        margin-left: 0.12rem;
    }
    .g-services{
        padding: 0 0.12rem;
        display: flex;
    }
    .g-h-services{
        display: inline-block;
        margin-left: 0.08rem;
    }
    .g-h-services:first-child{
        margin-left: 0;
    }
    .g-reviews-module{
        margin-top: 0.08rem;
        padding: 0 0 0.08rem;
        background-color: #fff;
    }
    .g-review-total{
        padding: 0 0.12rem;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
        height: 0.38rem;
        line-height: 0.38rem;
    }
    .g-total-left{
        font-size: 0.15rem;
        color:#151516;
    }
    .g-total-right{
        font-size: 0.13rem;
    }
    .g-review-item{
        padding-bottom: 0.08rem;
        border-bottom: 1px solid #f2f2f2;
    }
    .g-review-item:last-child{
        border-bottom: 0;
    }
    .g-review-tag{
        font-size: 0.14rem;
        color: #58595b;
        padding: 0 0.12rem;
    }
    .g-tag-group{
        display: flex;
        flex-flow: row wrap;
    }
    .g-tag-item{
        background-color: #fdefee;
        height: 0.3rem;
        line-height: 0.3rem;
        margin:0.12rem 0.08rem 0 0;
        padding: 0 0.08rem;
        border-radius: 0.04rem;
    }
    .g-review-desc{
        padding: 0.06rem 0 0 0.12rem;
    }
    .g-buyer{
        display: flex;
        margin:0.06rem 0 0.04rem;
    }
    .g-buyer img{
        width: 0.24rem;
        border-radius: 50%;
        margin-right: 0.06rem;
    }
    .g-buyer span{
        height: 0.24rem;
        line-height: 0.24rem;
        font-size: 0.13rem;
    }
    .g-review-content{
        display: -webkit-box;
        font-size: 0.14rem;
        padding-right: 0.12rem;
        -webkit-line-clamp:2;
        max-height: 0.42rem;
        overflow: hidden;
        color: #58595b;
        word-wrap:break-word;
        word-break:break-all;
        text-overflow:ellipsis;
        -webkit-box-orient:vertical;
    }
    .g-store{
        background: #fff;
        margin-top: 0.08rem;
        padding-bottom: 0.13rem;
    }
    .g-store-content{
        padding: 0.12rem 0.12rem 0 0.13rem;
        font-size: 0.13rem;
        display: flex;
        justify-content: space-between;
    }
    .g-store-right{
        font-size: 0.14rem;
        width: 0.68rem;
        height: 0.3rem;
        border:1px solid #9c9c9c;
        border-radius: 0.04rem;
        line-height: 0.3rem;
        text-align: center;
        color:#151516;
        margin-top: 0.06rem;
    }
    .g-store-left{
        display: flex;
    }
    .g-store-left img{
        width: 0.41rem;
        height: 0.41rem;
        margin-right: 0.08rem;
    }
    .g-store-left .g-store-info{
        display: inline-block;
    }
    .g-store-left .g-store-name{
        font-size: 0.15rem;
        color:#151516;
    }
    .g-store-left .g-store-num{
        color:#9c9c9c;
        margin-right: 0.12rem;
    }
    .g-store-desc{
        display: flex;
        font-size: 0.13rem;
        justify-content: space-around;
        padding-top: 0.1rem;
    }
    .g-store-item span{
        font-size: 0.11rem;
        color:#e02e24;
        background-color: #fff1f1;
    }
    .g-mall-module{
        padding-left:0.12rem;
        font-size: 0.13rem;
        background: #fff;
    }
    .g-mall-module ul{
        font-size: 0;
    }
    .g-mall-module .g-mall-item{
        margin:0 0.09rem 0.13rem 0;
        display: inline-block;
        width: 1.11rem;
    }
    .g-mall-item .g-mall-img img{
        width: 100%;
    }
    .g-mall-item .g-mall-name span{
        display: block;
        font-size: 0.13rem;
        margin-bottom: 0.04rem;
        color:#151516;
        height: 0.17rem;
        overflow: hidden;
    }
    .g-mall-item .g-mall-info{
        display: flex;
        justify-content: space-between;
    }
    .g-mall-item .g-mall-info .g-mall-price{
        font-size: 0.13rem;
        color:#e02e24;

    }
    .g-mall-item .g-mall-info .g-mall-num{
        font-size: 0.12rem;
        color:#9c9c9c;
    }
    .g-details{
        margin-top: 0.08rem;
        background: #fff;
    }
    .g-details p{
        padding:0 0.12rem;
        line-height: 0.4rem;
        font-size: 0.15rem;
    }
    .g-details-attr{
        margin: 0 0.12rem;
        background: #f4f4f4;
        padding: 0.07rem 0.12rem;
        font-size: 0.14rem;
        color:#9c9c9c;
    }
    .attr-item{
        margin-bottom: 0.04rem;
        line-height: 0.21rem;
    }
    .attr-item .attr-key{
        display: inline-block;
        width:0.86rem;
        margin-right: 0.12rem;

    }
    .attr-item .attr-value{
        display: inline-block;
        color:#151516;
    }
    .g-details-desc{
        margin:0.1rem 0.1rem 0.14rem;
    }
    .g-details-content{

        line-height: 0.2rem;
        font-size: 0.14rem;
    }
</style>