<template>
  <div class="order">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="location">
      <el-breadcrumb-item :to="{ path: '/' }">当前位置:<span>天河区车陂东尚明苑...</span><a href="javascript:void(0)">[切换地址]</a></el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <el-aside width="200px" style="overflow: hidden">
        <ul class="profile-sidebar" role="navigation" profile-sidebar=""><li class="profile-sidebar-section"><h2 class="profile-sidebar-sectiontitle" ng-class="{ active: pageName === 'profile' }"><i class="icon-line-home"></i><a href="/profile">个人中心</a></h2></li><li class="profile-sidebar-section"><h2 class="profile-sidebar-sectiontitle"><i class="icon-line-order"></i>我的订单</h2><ul><li ng-class="{ active: pageName === 'order' }"><a href="/profile/order">近三个月订单</a></li></ul></li><li class="profile-sidebar-section"><h2 class="profile-sidebar-sectiontitle"><i class="icon-yen"></i>我的资产</h2><ul><li ng-class="{ active: pageName === 'hongbao' }"><a href="/profile/hongbao">我的红包</a></li><li ng-class="{ active: pageName === 'balance' }"><a href="/profile/balance">账户余额</a></li><li ng-class="{ active: pageName === 'points' }"><a href="/profile/points">我的金币</a></li></ul></li><li class="profile-sidebar-section"><h2 class="profile-sidebar-sectiontitle"><i class="icon-line-profile"></i>我的资料</h2><ul><li ng-class="{ active: pageName === 'info' }"><a href="/profile/info">个人资料</a></li><li ng-class="{ active: pageName === 'address' }"><a href="/profile/address">地址管理</a></li></ul></li><li class="profile-sidebar-section"><h2 class="profile-sidebar-sectiontitle active" ng-class="{ active: pageName === 'favor' }"><a href="/profile/favor"><i class="icon-order-favor"></i>我的收藏</a></h2></li></ul>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "order",
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      goGo(){
        this.$router.go(1);
      },
      goHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .order{
    clear: both;
  }
  .location {
    vertical-align: middle;
    font-size: 12px;
    height: 60px;
    line-height: 60px;
  }
  .location>el-breadcrumb-item:first-child {
    color: #999;
    margin-right: 5px;
  }
  .profile-sidebar {
    float: left;
    margin-top: 20px;
    width: 200px;
  }

  ol, ul {
    list-style: none;
  }
  a, ins {
    text-decoration: none;
  }
  .profile-sidebar-section {
    margin-bottom: 32px;
  }
  .profile-sidebar-sectiontitle {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 18px;
  }
</style>
