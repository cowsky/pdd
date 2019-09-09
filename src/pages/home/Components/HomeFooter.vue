<template>
    <div id="footer-box">
        <div class="footer-content">
            <div class="footer-item" v-for="item in footerMsg">
                <div class="footer-item-icon"><img :src="item.icon" alt=""></div>
                <div class="footer-item-text">{{item.text}}</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "HomeFooter",
        data(){
            return{

            }
        },
        props:{
            footerMsg:Array
        }
    }
</script>

<style scoped>
    #footer-box{

    }
    .footer-content{
        width:100%;
        height: 0.5rem;
        display: -webkit-flex; /* Safari */
        display: flex;
        position: fixed;
        bottom: 0;
        background: #fff;
        z-index:9999;
    }
    .footer-item{
        position: relative;
        flex:1;
        -webkit-flex:1;
        font-size: 0.1rem;
        text-align: center;
        padding: 0.06rem 0.08rem;
    }
    .footer-item-text{
        /*position: absolute;*/
    }
    .footer-item-icon{
        /*position:absolute;*/
        height: 0.23rem;
        margin-bottom: 0.01rem;
    }
    .footer-item-icon img{
        height:100%
    }


</style>