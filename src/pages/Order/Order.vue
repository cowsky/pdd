<template>
    <div>
        <div id="goodsDetail">
            <div class="goodStore">
                <img src="//t16img.yangkeduo.com/pdd_ims/80251a77427fb3c59cb488bacc311df1.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/60/q/70/format/webp" alt="">
                <span>{{storeName}}</span>
            </div>
            <div class="goodDetail">
                <img  class="goodImg" src="//t00img.yangkeduo.com/goods/images/2019-05-29/e7564269-ff99-4e03-ac32-a1074a14f7d6.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/234/q/70/format/webp" alt="">
                <div class="detail">
                    <p>{{goodName}}</p>
                    <p class="spec">{{skuColor}},{{skuSize}}</p>
                </div>
                <div class="priceNum">
                    <div class="goodPrice"><span>￥</span>16.9</div>
                    <div class="goodNum">x{{goodNum}}</div>
                </div>
            </div>
            <div class="goodPayment">
                <span>实付</span>
                <span class="amount">
                    <i>￥</i>
                    <span>16.9</span>
                </span>
                <span>(免运费)</span>
            </div>
            <div class="contact">
                <div class="contact-item">联系商家</div>
                <div class="contact-item">拨打电话</div>
            </div>
        </div>
        <ul id="orderDetail">
            <li v-for="item in orderInfo">
                <span class="orderKey">{{item.key}}</span>
                <span class="orderValue">{{item.value}}</span>
            </li>
        </ul>
        <div class="orderBottom">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Order",
        data(){
            return{
                "storeName":"贵福人妈妈装",
                "goodImg":"//t00img.yangkeduo.com/goods/images/2019-05-29/e7564269-ff99-4e03-ac32-a1074a14f7d6.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/234/q/70/format/webp",
                "goodName":"妈妈装夏装时尚洋气纯色雪纺衫中老年女装高贵短袖小衫中年人衣服",
                "skuColor":"红色",
                "skuSize":"XL【建议体重85斤-105斤】",
                "goodNum":"1",
                "goodPrice":"16.9",
                "orderInfo":[
                    {
                        "key":"订单编号：",
                        "value":"190820-363256546031821"
                    },
                    {
                        "key":"下单时间：",
                        "value":"2019-08-20 20:22:46"
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    #goodsDetail{
        background: #fff;
        width: 100%;
        font-size: 0;
        margin-bottom: 0.08rem;
    }
    .goodStore{
        padding: 0.09rem 0.12rem;
    }
    .goodStore img{
        width: 0.2rem;
        height: 0.2rem;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .goodStore span{
        font-size: 0.13rem;
        vertical-align: middle;
    }
    .goodDetail{
        padding: 0.07rem 0.11rem;
        background: #f5f5f5;
        display: flex;
        color:#151516;
    }
    .goodImg{
        width: 0.78rem;
        height: 0.78rem;
        margin-right: 0.12rem;
    }
    .goodDetail .detail{
        font-size: 0.13rem;
        margin-right: 0.02rem;
    }
    .goodDetail .detail .spec{
        color:#9c9c9c;
        font-size: 0.12rem;
    }
    .priceNum{
        font-size: 0.13rem;
    }
    .priceNum .goodNum{
        text-align: right;
        color:#9c9c9c;
    }
    .goodPayment{
        text-align: right;
        padding: 0.1rem;
        font-size: 0.12rem;
        border-bottom: 1px solid rgba(0,0,0,.05);
    }
    .goodPayment .amount{
        color:#e02e24;
        font-size: 0.16rem;
    }
    .contact{
        color:#333;
        text-align: center;
        font-size: 0.14rem;
        display: flex;
        height:0.5rem;
        line-height: 0.26rem;
        padding: 0.12rem;
    }
    .contact-item{
        flex:1;

    }
    .contact-item:first-child{
        border-right: 1px solid #f5f5f5;
    }

    #orderDetail{
        background: #fff;
        padding: 0.085rem 0.1rem;
        font-size: 0.12rem;
    }
    #orderDetail .orderKey{
        display: inline-block;
        min-width: 0.7rem;
    }
</style>