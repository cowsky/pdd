<template>
    <div id="header-box">
        <div class="nar-bar-container">
                <ul class="nar-bar-ul">
                    <li class="nar-bar-item" v-for="item in narBarMsg">{{item}}</li>
                </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        data(){
            return {

            }
        },
        props:{
            narBarMsg:Array
        }
    }
</script>

<style scoped>
    #header-box{
        position:sticky;
        top:0;
        left:0;
        width: 100%;
    }
    .nar-bar-container{
        position:relative;
        height: 0.4rem;
        background: #fff;
        overflow: hidden;
    }
    .nav-bar-edge{
        background: #fff;
        height: 0.41rem;
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        position: absolute;
        left: 0;
        top: 0;
    }
    .nar-bar-ul{
        padding:0 0.14rem;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        font-size: 0.16rem;
        height: 0.51rem;
        line-height: 0.42rem;
    }
    .nar-bar-item{
        display: inline-block;
        margin-left: 0.2rem;

     }
    .nar-bar-item:first-child {
        margin-left: 0;
    }
    .nar-selected{
        border-bottom: 2px solid #e02e24;
        color: #e02e24;

    }
</style>