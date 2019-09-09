<template>
    <div>
        <div class="icon-nav-box">
            <ul class="icon-nav-ul">
                <li class="icon-nav-item" v-for="item in iconMsg">
                    <span class="icon-nav-img"><img :src="item.iconImg" alt=""></span>
                    <div>{{item.iconText}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeIconNav",
        data(){
            return {

            }
        },
        props:{
            iconMsg:Array
        }

    }
</script>

<style scoped>
    .icon-nav-box{
        margin:0.08rem 0;
        padding: 0.05rem 0.06rem;
        background: #fff;
    }
    .icon-nav-ul{
        display: flex;
        font-size: 0.12rem;
        flex-flow: row wrap;
        text-align: center;
    }
    .icon-nav-item{
        flex-basis:20%;
    }

    .icon-nav-img{
        display: inline-block;
        width:0.54rem;
        height: 0.54rem;
        overflow: hidden;
    }
    .icon-nav-img>img{
        width: 100%;
    }
    .icon-nav-item:last-child img{
        margin-top: 0.16rem;
        width: 0.22rem;
        height: 0.22rem;
    }

</style>