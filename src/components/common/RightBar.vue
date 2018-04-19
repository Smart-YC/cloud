<template>
  <div class="right-bar">
    <div class="sidebar-tabs">
      <div class="toolbar-tabs-middle">
        <a class="toolbar-btn icon-order toolbar-close" href="/profile/order" hardjump=""
           tooltip="我的订单" tooltip-placement="left" ubt-click="toolbar_order"><i class="iconfont icon-dingdan"></i>
          <!-- ngIf: sidebarCount.uncompletedOrder > 0 --></a>
        <div class="toolbar-separator"></div>
        <a class="toolbar-cartbtn icon-cart toolbar-open" href="JavaScript:" template="cart"
           ng-class="{'focus': (activeTemplate === 'cart' &amp;&amp; isSidebarOpen), 'toolbar-cartbtn-shownum': foodCount.count}"
           ubt-click="390">购物车<!-- ngIf: foodCount.count --></a>
        <div class="toolbar-separator"></div>
        <a class="toolbar-btn icon-notice toolbar-open modal-hide" href="JavaScript:" template="message"
           ng-class="{'focus': (activeTemplate === 'message' &amp;&amp; isSidebarOpen), 'toolbar-open': user, 'modal-hide': user}"
           tooltip="我的信息" tooltip-placement="left" ubt-click="392"><!-- ngIf: messageCount.count --></a>
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
  }

  a {
    text-decoration: none;
  }

  .iconfont {
    font-size: 24px;
  }

  .toolbar-separator {
    font-size: 1px;
    border-top: 1px solid #737074;
    height: 0;
    margin: 0 8px;
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
    padding: 7px 8px 10px;
    margin-bottom: 8px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
  }

  .toolbar-cartbtn:before {
    font-size: 20px;
    margin-bottom: 5px;
    display: block;
    font-weight: 400;
  }
</style>
