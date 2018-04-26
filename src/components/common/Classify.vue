<template>
  <div class="classify">
    <div class="place-container">
      <img src="../../assets/images/main/takeout.408a87.png" alt="谁来拿外卖" width="186" height="55">
    </div>
    <div class="excavator-filter ng-scope" ng-if="rstCategories.length"><span class="excavator-filter-name">商家分类:</span>
      <router-link
        v-for="(item,index) in foodClassify" :key="index"
        class="excavator-filter-item ng-binding ng-scope"
        @click="selected(item)"
        :class="{active: activeName == item}"
        to="/Index/Allshop">{{item}}
      </router-link>
      <div ng-show="subCategories" class="excavator-filter-subbox ng-hide">
        <!-- ngRepeat: subitem in subCategories --></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "classify",
    data() {
      return {
        foodClassify: ['全部商家', '美食', '快餐便当', '特色菜系', '一国料理', '小吃夜宵', '甜品饮品', '果蔬生鲜', '商店超市', '鲜花绿植', '医药健康', '早餐', '午餐', '下午茶', '晚餐', '夜宵'],
        activeName: '全部商家'
      }
    },
    methods: {
      selected: shopName => {
        this.activeName = shopName
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .classify {
    clear: both;
    margin-bottom: 20px;
  }

  .place-container {
    text-align: right;
    margin-bottom: -10px;
    z-index: 1000;
  }

  .excavator-filter {
    line-height: 26px;
    padding: 10px 10px 10px 7em;
    background-color: #fff;
    position: relative;
    font-size: 14px;
    border: 1px solid #e6e6e6;
  }

  .excavator-filter-name {
    position: absolute;
    left: 10px;
    top: 13px;
    color: #999;
  }

  .excavator-filter-item.active {
    line-height: 36px;
    background-color: #f6f6f6;
    border-radius: 0;
    margin: 0;
    padding: 0 16px;
    height: 38px;
  }

  .excavator-filter-item:hover {
    background-color: #f6f6f6;
  }

  .excavator-filter a {
    color: #666;
  }

  .excavator-filter-item {
    white-space: nowrap;
    display: inline-block;
    margin: 5px 6px;
  }

  .excavator-filter-item, .excavator-filter-name {
    padding: 0 10px;
    margin-right: 8px;
  }
</style>
