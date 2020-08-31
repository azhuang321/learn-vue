<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUIU</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "nav-header"
}
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/mixin.scss";

 .header{
   .nav-topbar{
     height: 39px;
     line-height: 39px;
     background-color: #333333;
     color: #B0B0B0;
     .container {
       @include flex();
       a{
         display: inline-block;
         color: #B0B0B0;
         margin-right: 17px;
       }
       .my-cart {
         width: 110px;
         background-color: #FF6600;
         text-align: center;
         color: #ffffff;
         .icon-cart {
           @include bgImg(16px,12px,"/imgs/icon-cart-checked.png");
           margin-right: 4px;
         }
       }

     }
   }
   .nav-header{
     .container {
       position:relative;
       height: 112px;
       @include flex();
       .header-logo {
         display: inline-block;
         width: 55px;
         height: 55px;
         background-color: #FF6600;
         a {
           display: inline-block;
           width: 110px;
           height: 55px;
           &:before {
             content: ' ';
             @include bgImg(55px,55px,"/imgs/mi-logo.png",55px);
             transition: margin 0.2s;
           }
           &:after {
             content: ' ';
             @include bgImg(55px,55px,"/imgs/mi-home.png",55px);
           }
           &:hover:before {
             margin-left: -55px;
             transition: margin 0.2s;
           }
         }
       }
       .header-menu {
         display: inline-block;
         width: 643px;
         padding-left: 209px;
         .item-menu {
           display: inline-block;
           color: #333333;
           font-weight: bold;
           font-size: 16px;
           line-height: 112px;
           margin-right: 20px;
           span{
             cursor:pointer;
           }
           &:hover{

           }
         }
       }
       .header-search{
         width: 319px;
         .wrapper {
           height: 50px;
           border: 1px solid #e0e0e0;
           display: flex;
           align-items: center;
           input {
             border: none;
             border-right: 1px solid #e0e0e0;
             box-sizing: border-box;
             width: 264px;
             height: 50px;
             padding-left: 14px;
           }
           a {
             @include bgImg(18px,18px,"/imgs/icon-search.png");
             margin-left: 17px;
           }
         }
       }
     }
   }
 }
</style>