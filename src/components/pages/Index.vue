<template>
  <div class="home">
    <Location></Location>
    首页
  </div>
</template>

<script>
  import Location from '@/components/common/Location'

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
    components: {
      Location
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
    margin-top: 60px;
  }

  .el-carousel__item {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 960px;
    margin: 0;
    height: 960px;
  }

  .el-carousel__item:nth-child(2n) {
    background-image: url("../../assets/images/banner/cold-brew-desktop.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../assets/images/banner/kv.jpg");
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

  .bg-one {
    background-image: url("../../assets/images/promotion/starbucks-tmall-0312-cn.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-two {
    background-image: url("../../assets/images/promotion/starbucks-design-studio-web-china.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-three {
    background-image: url("../../assets/images/promotion/homepage-career-cn.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 250px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .advertise-wrap {
    padding: 30px 0;
    background: #f7f7f7;
  }

  .advertise-container {
    width: 1200px;
    margin: 0 auto;
  }

  .introduce-container {
    width: 1200px;
    margin: 0 auto;
  }

</style>
