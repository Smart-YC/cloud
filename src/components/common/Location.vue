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
        locationMsg: "北土城民族园1号"
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
          v.locationMsg = "Geolocation is not supported by this browser.";
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
            v.locationMsg = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            v.locationMsg = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            v.locationMsg = "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            v.locationMsg = "An unknown error occurred.";
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

  .location a {
    color: #0089dc;
  }

  .search-food {
    float: right;
    height: 60px;
    line-height: 60px;
  }
</style>
