<template>
  <div class="location-container">
    <div class="location">
      <span>当前位置:</span> <span class="location-current"><a class="inherit ng-binding" ng-href="/place/wx4ervtj01xx"
                                                           ubt-click="401" ng-bind="place.name || place.address"
                                                           href="/place/wx4ervtj01xx">北京市商务管理学校</a></span> <span
      class="location-change"
      ng-class="{ 'location-hashistory': user.username &amp;&amp; userPlaces &amp;&amp; userPlaces.length > 0 }"><a
      ng-href="/home" ubt-click="400" hardjump="" href="/home">[切换地址]</a></span></div>
    <div class="place-search">
      <el-input
        placeholder="请输入内容"
        v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "location"
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .location-container {
    width: 1200px;
    margin: 0 auto;
    clear: both;
  }

  .location {
    float: left;
    vertical-align: middle;
  }

  .place-search {
    float: right;
  }
</style>
