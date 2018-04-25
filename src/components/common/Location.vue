<template>
  <div class="location-container">
    <div class="location">
      <span>当前位置:</span> <span class="location-current">{{locationMsg}}</span><a href="#"><span
      class="location-change">  [切换地址]</span></a></div>
    <div class="search-food">
      <el-input
        placeholder="搜索商家、美食...">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: "location",
    data() {
      return {
        locationMsg: "正在定位中..."
      };
    },
    mounted: function () {
      this.getLocation();
    },
    methods: {
      getLocation() {
        let v = this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        }
        else {
          v.locationMsg = "地理定位不受这个浏览器的支持";
        }
      },
      showPosition(position) {
        let v = this;
        v.locationMsg = "Latitude: " + position.coords.latitude +
          "<br />Longitude: " + position.coords.longitude;
      },
      showError(error) {
        let v = this;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            v.locationMsg = "用户拒绝了地理定位的请求";
            break;
          case error.POSITION_UNAVAILABLE:
            v.locationMsg = "位置信息不可用";
            break;
          case error.TIMEOUT:
            v.locationMsg = "用户位置请求超时";
            break;
          case error.UNKNOWN_ERROR:
            v.locationMsg = "一个未知的错误发生";
            break;
        }
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .location-container {
    clear: both;
  }

  .location {
    float: left;
    vertical-align: middle;
    font-size: 12px;
    height: 60px;
    line-height: 60px;
  }
  .location>span:first-child {
    color: #999;
    margin-right: 5px;
  }
  .location a {
    color: #0089dc;
  }

  .search-food {
    float: right;
    height: 60px;
    line-height: 60px;
  }
</style>
