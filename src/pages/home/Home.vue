<template>
    <div>
        <home-header :narBarMsg="narBarMsg"></home-header>
        <home-swiper></home-swiper>
        <home-icon-nav :iconMsg="iconMsg"></home-icon-nav>
        <home-goods :goodsMsg="goodsMsg"></home-goods>
        <home-footer :footerMsg="footerMsg" ></home-footer>
    </div>
</template>

<script>
    import HomeHeader from "./Components/HomeHeader"
    import HomeSwiper from "./Components/HomeSwiper"
    import HomeFooter from "./Components/HomeFooter"
    import HomeIconNav from "./Components/HomeIconNav"
    import HomeGoods from "./Components/HomeGoods"
    import axios from "axios"

    export default {
        name: "Home",
        data(){
          return{
              goodsMsg:[],
              narBarMsg:[],
              iconMsg:[],
              footerMsg:[]
          }
        },
        components:{
            HomeHeader,
            HomeFooter,
            HomeSwiper,
            HomeIconNav,
            HomeGoods
        },
        methods:{
            getHomeData(){
                axios.get("/api/index").then(this.getHomeDataSucc);
            },
            getHomeDataSucc(res){
                res = res.data;
                if(res.ret && res.data){
                    var data = res.data;
                    this.goodsMsg = data.goodsMsg;
                    this.narBarMsg = data.narBarMsg;
                    this.iconMsg = data.iconMsg;
                    this.footerMsg = data.footerMsg;
                }
            }
        },
        mounted(){
            this.getHomeData();
        }
    }
</script>

<style scoped>

</style>