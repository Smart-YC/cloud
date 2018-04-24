<template>
  <div class="right-bar">
    <div class="sidebar-tabs">
      <div class="toolbar-tabs-middle">
        <el-tooltip class="item" effect="dark" content="我的订单" placement="left">
          <a href="#" class="text-white toolbar-cartbtn"><i class="iconfont icon-dingdan"></i></a>
        </el-tooltip>
        <div class="toolbar-separator"></div>
        <el-tooltip class="item" effect="dark" content="购物车" placement="left">
          <a href="#" class="text-white toolbar-cartbtn"><i class="iconfont icon-gouwuche"></i>购物车</a>
        </el-tooltip>
        <div class="toolbar-separator"></div>
        <el-tooltip class="item" effect="dark" content="我的信息" placement="left">
          <a href="#" class="text-white toolbar-cartbtn"><i class="iconfont icon-icon-p_xinfeng"></i></a>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "right-bar"
  }
</script>

<style scoped>
  .right-bar {
    height: 100%;
    width: 35px;
    background-color: #504d53;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }

  a {
    text-decoration: none;
  }

  .item{
    display:block;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .item:hover{
    background-color: #1e89e0;
  }

  .text-white {
    color: #fff;
  }

  .iconfont {
    font-size: 14px;
  }

  .toolbar-separator {
    font-size: 1px;
    border-top: 1px solid #737074;
    height: 0;
    margin: 0 8px;
    padding-left: 5px;
  }

  .sidebar-tabs {
    float: left;
    width: 35px;
    height: 100%;
  }

  .toolbar-tabs-middle {
    position: absolute;
    width: 35px;
    top: 50%;
    margin-top: -220px;
  }

  .toolbar-btn {
    width: 35px;
    line-height: 35px;
    color: #ccc;
    margin: 5px 0;
  }

  .toolbar-cartbtn {
    color: #ccc;
    line-height: 16px;
    padding: 7px 10px 10px;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
  }


</style>
