<template>
  <div class="classify">
    <div class="place-container">
      <img src="../../assets/images/main/takeout.408a87.png" alt="谁来拿外卖" width="186" height="55">
    </div>
    <div class="excavator-filter ng-scope" ng-if="rstCategories.length"><span class="excavator-filter-name">商家分类:</span>
      <!-- ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope active"
                                                     href="javascript:" ng-repeat="category in rstCategories"
                                                     ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                     ng-bind="category.name" ng-click="changeCategory(category)"
                                                     ubt-click="380">全部商家</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">美食</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">快餐便当</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">特色菜系</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">异国料理</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">小吃夜宵</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">甜品饮品</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">果蔬生鲜</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">商店超市</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">鲜花绿植</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">医药健康</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">早餐</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">午餐</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">下午茶</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">晚餐</a>
      <!-- end ngRepeat: category in rstCategories --><a class="excavator-filter-item ng-binding ng-scope"
                                                         href="javascript:" ng-repeat="category in rstCategories"
                                                         ng-class="{'focus': clickedCategory === category.id &amp;&amp; (!clickedCategory || clickedCategory < 0) , 'active': activeCategory === category.id, 'premium': category.id === -10001 &amp;&amp; !pumStream}"
                                                         ng-bind="category.name" ng-click="changeCategory(category)"
                                                         ubt-click="380">夜宵</a>
      <!-- end ngRepeat: category in rstCategories -->
      <div ng-show="subCategories" class="excavator-filter-subbox ng-hide">
        <!-- ngRepeat: subitem in subCategories --></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "classify"
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
