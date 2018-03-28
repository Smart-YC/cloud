<template>
  <div class="home">
    <el-carousel height="500px" :interval="5000">
      <el-carousel-item v-for="item in 2" :key="item">
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="../assets/images/promotion/starbucks-tmall-0312-cn.jpg" alt="浪漫富春意" width="412" height="260">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="../assets/images/promotion/starbucks-design-studio-web-china.jpg" alt="实体店" width="412"
               height="260">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img src="../assets/images/promotion/homepage-career-cn.jpg" alt="星巴克招募" width="412" height="260">
        </div>
      </el-col>
    </el-row>

    <ul class="list">
      <li v-for="item in list" v-text="item.unitname"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        list: [],
      }
    },
    created: function () {
      this.get_data();
    },
    methods: {
      get_data: function () {
        let v = this;
        console.group('created 调用方法===============》');
        this.$http.post("https://localhost:8443/wmms/wmms/api/organizationStructure/getUnit", {
          // page: 0,
          // size: 10
        }, {emulateJSON: false}).then(
          function (res) {
            // 处理成功的结果
            console.group(res);
            v.list = res.body.body.rows;
          }, function (res) {
            // 处理失败的结果
            console.group(res);
          }
        );
      },
    }
  }
</script>

<style scoped>
  .home {
    width: 100%;
  }

  .el-carousel__item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
    height: 500px;
  }

  .el-carousel__container {
    position: relative;
    height: 500px !important;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("../assets/images/banner/cold-brew-desktop.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../assets/images/banner/kv.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
