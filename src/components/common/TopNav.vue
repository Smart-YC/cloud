<template>
  <div>
    <h1><a href="/" hardjump="" class="topbar-logo icon-logo"><span>饿了么</span></a></h1>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1e89e0"
      text-color="#fff"
      active-text-color="#1e89e0"
      :router="true"
      default-active="/Index">
      <el-menu-item index="/Index">首页</el-menu-item>
      <el-menu-item index="/Order">我的订单</el-menu-item>
      <el-menu-item index="/Join">加盟合作</el-menu-item>
      <el-menu-item index="/Service">我的客服</el-menu-item>
    </el-menu>
    <el-popover
      ref="popover"
      placement="bottom-start"
      width="200"
      trigger="hover">
      <div class="qrcode-container">
        <span>扫一扫，手机订餐更方便</span>
        <img src="//shadow.elemecdn.com/faas/desktop/media/img/appqc.95e532.png" class="topbar-nav-qrcode"
             alt="扫一扫下载饿了么手机 App" width="180" height="180">
      </div>
    </el-popover>
    <ul class="topbar-nav">
      <li><a href="">规则中心</a></li>
      <li class="phone-use">
        <el-button type="text" v-popover:popover><i class="iconfont  icon-shouji1"></i> 手机应用</el-button>
      </li>
      <li><a href=""><i class="iconfont  icon-iconfontzhizuobiaozhun023104"></i><span class="user-bold"> 登录/注册</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "topNav",
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style scoped>

  h1, ul {
    padding: 0;
    margin: 0;
  }

  .el-menu-demo {
    float: left;
  }
  [class*=" icon-"], [class^=icon-] {
    font-family: eleme;
    speak: none;
    font-style: normal;
    font-weight: 400;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .topbar-logo {
    float: left;
    color: #fff;
    height: 60px;
    width: 120px;
    margin-right: 30px;
    line-height: 60px;
  }
  .topbar-logo:before {
    color: #fff;
    font-size: 32px;
    vertical-align: top;
  }

  .icon-logo:before {
    content: "\e92c";
  }

  .topbar-nav {
    list-style: none;
    float: right;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }

  .topbar-nav li {
    display: inline;
    margin-left: 15px;
  }

  .el-menu-item {
    font-size: 16px;
  }

  a {
    color: #d2e7f9;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  .iconfont {
    font-size: 24px;
  }

  .user-bold {
    font-weight: bold;
    color: #fff;
  }

  .is-active {
    color: #fff !important;
    background-color: rgb(24, 110, 179) !important;
  }

  .el-button--text {
    color: #d2e7f9;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
  }

  .el-button--text:hover {
    color: #fff;
  }

  .el-button {
    padding: 0px !important;
  }

  .phone-use {
    margin-right: 70px;
  }

  .qrcode-container {
    padding: 10px;
    color: #333;
    font-size: 16px;
    font-weight: 700;

  }

</style>
