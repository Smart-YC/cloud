<template>
  <div>
    <h3 class="topbar-logo">饿了吗</h3>
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
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>
    <ul class="topbar-nav">
      <li><a href="">规则中心</a></li>
      <li><a href=""><i class="iconfont  icon-shouji"></i> 手机应用</a></li>
      <li><a href=""><i class="iconfont  icon-gerenzhongxin"></i><span class="user-bold"> 登录/注册</span></a></li>
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


  .el-menu-demo {
    float: left;
  }

  .topbar-logo {
    float: left;
    color: #fff;
    height: 60px;
    margin-right: 10px;
  }

  .topbar-nav {
    list-style: none;
    float: right;
    height: 60px;
  }

  .topbar-nav li {
    display: inline;
    margin-left: 15px;
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
  }

  .is-active {
    color: #fff !important;
    background-color: rgb(24, 110, 179) !important;
  }
</style>
