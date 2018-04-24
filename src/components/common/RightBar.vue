<template>
  <div class="right-bar">
    <div class="sidebar" role="complementary" ng-hide="layoutState &amp;&amp; layoutState.hideSidebar"
         v-bind:style="content">

      <div class="sidebar-tabs">
        <div class="toolbar-tabs-middle">
          <el-tooltip class="item" effect="dark" content="我的订单" placement="left">
            <a href="#" class="text-white toolbar-cartbtn"><i class="iconfont icon-dingdan"></i></a>
          </el-tooltip>
          <div class="toolbar-separator"></div>
          <el-tooltip class="item" effect="dark" content="购物车" placement="left">
            <a href="#" class="text-white toolbar-cartbtn" @click="toggleShop()"><i class="iconfont icon-gouwuche"></i>购物车</a>
          </el-tooltip>
          <div class="toolbar-separator"></div>
          <el-tooltip class="item" effect="dark" content="我的信息" placement="left">
            <a href="#" class="text-white toolbar-cartbtn"><i class="iconfont icon-icon-p_xinfeng"></i></a>
          </el-tooltip>
        </div>
      </div>
      <div class="sidebar-content">
        <!-- ngInclude: activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : '' -->
        <div
          ng-include="activeTemplate ? ('/common/page/_block/sidebar/sidebar-'+ activeTemplate + '/sidebar-'+ activeTemplate + '.html') : ''"
          class="ng-scope">
          <div ng-controller="sidebarCartCtrl" class="ng-scope">
            <div class="sidebarcart-caption"><a ng-href="/shop/156840502" ng-bind="cart.restaurant_info.name || '购物车'"
                                                ubt-click="394" class="ng-binding" href="/shop/156840502">购物车</a>
              <i class="icon-angle-double-right iconfont icon-shuangjiantouyou" @click="toggleShop()"></i></div><!-- ngIf: loading -->
            <!-- ngIf: pieces -->
            <div class="sidebarcart-summary ng-hide" ng-show="pieces"><p>共 <span class="color-stress ng-binding"
                                                                                 ng-bind="pieces">0</span> 份，总计 <span
              class="color-stress ng-binding" ng-bind="total">0</span></p>
              <button ng-click="settle()" class="sidebarcart-submit ng-binding sidebarcart-hasagio"
                      ng-class="{ 'sidebarcart-hasagio': submitButton.disabled }" ng-bind="submitButton.text"
                      ubt-click="391">购物车是空的
              </button>
            </div><!-- ngIf: !loading && !pieces -->
            <div ng-if="!loading &amp;&amp; !pieces" class="sidebarcart-notice ng-scope"><i class="icon-history"></i>
              <h3>购物车空空如也</h3>
              <p>快去订餐吧，总有你心仪的美食</p></div><!-- end ngIf: !loading && !pieces --></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "right-bar",
    data() {
      return {
        isShow: false,
        content: {
          transform: 'translate3d(0px, 0px, 0px)'
        }
      }
    },
    methods: {
      //购物车的显示隐藏
      toggleShop: function () {
        if (this.isShow) {
          this.content.transform = 'translate3d(0px, 0px, 0px)';
          this.isShow = false;
        } else {
          this.content.transform = 'translate3d(-295px, 0px, 0px)';
          this.isShow = true;
        }
      }
    }
  }
</script>

<style scoped>
  .right-bar {
    height: 100%;
    width: 35px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }

  a {
    text-decoration: none;
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -295px;
    background-color: #504d53;
    width: 330px;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    z-index: 7;
  }

  .sidebar-content {
    margin-left: 35px;
    height: 100%;
    width: 295px;
    overflow: auto;
    background-color: #e6e6e6;
  }

  .sidebarcart-caption {
    background: #fff;
    font-size: 16px;
    color: #999;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .sidebarcart-caption > a, .sidebarcart-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #000;
  }

  .sidebarcart-summary {
    padding: 20px 10px;
    text-align: right;
    border-top: 1px solid #ddd;
    width: 295px;
    left: 35px;
    bottom: 0;
    background: #fff;
    opacity: .95;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)";
    position: absolute;
  }

  .sidebarcart-notice, .sidebarhistory-notice, .sidebarmessage-notice {
    padding: 5px 10px;
    font-size: 18px;
    text-align: center;
    color: #333;
  }

  .icon-angle-double-right {
    float: right;
    cursor: pointer;

  }

  .item {
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .item:hover {
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
    z-index: 8;
    background-color: #504d53;
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
