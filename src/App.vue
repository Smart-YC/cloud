<template>
  <div id="app">
    <!--顶部导航-->
    <div class="app-wrap">
      <div class="app-container">
        <TopNav></TopNav>
      </div>
    </div>
    <!--右侧工具栏-->
    <RightBar></RightBar>
    <!--内容区域-->
    <main class="content">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </main>
    <!--底部版本信息-->
    <div class="footer">
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/common/TopNav'
  import RightBar from '@/components/common/RightBar'
  import Foot from '@/components/common/Foot'

  export default {
    name: 'App',
    data: function () {
      return {
        menuData: []
      }
    },
    components: {
      TopNav, RightBar, Foot
    },
    computed: {
      onRoutes: function () {
        return this.$route.path.replace('/', '');
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;

  }

  body, button, input, select, textarea {
    font: 400 1em/1.5 PingFang SC, Lantinghei SC, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans;
  }

  .el-rate__icon {
    font-size: 14px !important;
  }

  .el-popover {
    border: 2px solid #e6e6e6 !important;
  }

  .el-breadcrumb {
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    padding: 0 5px;
  }
  .el-menu{
   border-right: none;
  }
  .app-wrap {
    display: block;
    height: 60px;
    background-color: #1e89e0;
  }

  .app-container {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    min-height: 300px;
  }

  .footer {
    margin-top: 20px;
    border-top: 1px solid #e6e6e6;
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
  }
</style>
