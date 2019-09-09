<template>
    <div>
        <div class="sku-selector-bg" @click="popSelfShow">
            <div class="sku-selector-main">
                <div class="sku-selector-container">
                    <div class="sku-selector-head">
                        <img :src="skuInfo.initImage" alt="">
                        <div class="sku-selector-head-content">
                            <div class="sku-selector-price">￥{{skuInfo.initPrice}}</div>
                            <div class="sku-selector-desc">{{skuInfo.selectState}} {{skuInfo.colorState}} {{skuInfo.sizeState}}</div>
                        </div>
                        <div class="sku-selector-close-btn"></div>
                    </div>
                    <div class="sku-selector-body">
                        <div class="sku-specs">
                            <div class="sku-specs-key">颜色分类</div>
                            <div class="sku-specs-value-list" >
                                <div  v-for="(item,index) in skuInfo.skuColor" class="sku-specs-value"  :class="{skuSelect:index===colorDynamic}" @click="colorSelect(index)">{{item.color}}</div>
                            </div>
                        </div>
                        <div class="sku-specs">
                            <div class="sku-specs-key">尺码</div>
                            <div class="sku-specs-value-list">
                                <div v-for="(item,index) in skuInfo.skuSize" class="sku-specs-value" :class="{skuSelect:index===sizeDynamic}" @click="sizeSelect(index)">{{item.size}}</div>
                            </div>
                        </div>
                        <div class="sku-selector-nums">
                            <span>数量</span>
                            <div class="sku-reduce"></div>
                            <input type="number" class="sku-selector-input" maxlength="5" value="1"  disabled="disabled">
                            <div class="sku-increase"></div>
                        </div>
                    </div>
                    <div class="sku-selector-bottom" @click="LayerToast">确定</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsSelected",
        props:[
            "goodSelectInfo"
        ],
        data(){
            return{
                skuInfo:{
                    "initImage":"",
                    "initPrice":"",
                    "selectState":"",
                    "colorState":"",
                    "sizeState":"",
                    "skuSize":[]
                },
                colorDynamic:-1,
                sizeDynamic:-1,
                state:"",
            }
        },

        methods:{
            popSelfShow(event){
                let dom = document.querySelector(".sku-selector-main");
                if(dom){
                    if(!dom.contains(event.target)){
                        this.$emit("changefalse");
                    }
                }
            },
            dataShow(data){
                this.skuInfo=data;
            },
            colorSelect(index){
                this.colorDynamic=index;
                this.skuInfo.selectState="已选";
                this.skuInfo.colorState=this.skuInfo.skuColor[index].color;
                this.skuInfo.initImage=this.skuInfo.skuColor[index].img;
            },
            sizeSelect(index){
                this.sizeDynamic=index;
                this.skuInfo.selectState="已选";
                this.skuInfo.sizeState=this.skuInfo.skuSize[index].size;
                this.skuInfo.initPrice=this.skuInfo.skuSize[index].price;
            },
            LayerToast(){
                if(this.skuInfo.colorState==="颜色" || this.skuInfo.sizeState==="尺码"){
                    this.$layer.toast({
                        icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                        content: '请选择商品属性',
                        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                    })
                }else{

                }


            },
        },
        created(){
            this.skuInfo=this.goodSelectInfo;
        }
    }
</script>

<style scoped>
    .sku-selector-bg{
        position: fixed;
        top:0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(0,0,0,0.7);
        z-index:10023;
    }
    .sku-selector-main{
        position: fixed;
        width: 100%;
        height: 5.1rem;
        bottom: 0;
        padding-top: 0.3rem;
    }
    .sku-selector-container{
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .sku-selector-head{
        display: flex;
        position: relative;
        height: 0.83rem;
        border-bottom: 1px solid #f2f2f2;
    }
    .sku-selector-head img{
        position: absolute;
        top:-0.27rem;
        left: 0.12rem;
        width: 0.98rem;
        height: 0.98rem;
        border:1px solid #f2f2f2;
        border-radius: 0.04rem;
    }
    .sku-selector-head .sku-selector-head-content{
        padding:0.1rem 0 0 1.21rem;
    }
    .sku-selector-price{
        font-size: 0.17rem;
        color: #e02e24;
    }
    .sku-selector-desc{
        font-size: 0.13rem;
    }
    .sku-selector-body{
        width: 100%;
        max-height: 3.08rem;
        overflow: scroll;
        padding-left: 0.12rem;
    }
    .sku-specs{
        padding: 0.12rem 0 0.05rem;
        border-bottom: 1px solid #f2f2f2;
    }
    .sku-specs-key{
        font-size: 0.14rem;
        color:#151516;
        line-height: 1;
    }
    .sku-specs-value{
        font-size: 0.13rem;
        display:inline-block;
        height: 0.29rem;
        line-height: 0.29rem;
        padding: 0 0.09rem;
        margin:0 0.1rem 0.1rem 0;
        color:#151516;
        background: #f5f5f5;
        border-radius: 0.04rem;
    }
    .sku-specs-value-list{
        font-size: 0;
        margin-top: 0.12rem;
        padding-right: 0.12rem;

    }
    .sku-selector-bottom{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        background: #e02e24;
        color:#fff;
        font-size: 0.18rem;
    }
    .sku-selector-nums{
        position: relative;
        height: 0.6rem;
        line-height: 0.56rem;
        border-bottom: 1px solid #f2f2f2;
        font-size: 0;
    }
    .sku-selector-nums span{
        font-size: 0.14rem;
        display: inline-block;
    }
    .sku-selector-input{
        position: absolute;
        width: .36rem;
        height: .25rem;
        top: .17rem;
        right: .44rem;
        line-height: normal;
        font-size: .14rem;
        margin: 0;
        padding: .06px 0;
        color: #151516;
        text-align: center;
        border:1px solid #f2f2f2;
    }
    .skuSelect{
        background: #e02e24;
        color:#fff;
    }


</style>