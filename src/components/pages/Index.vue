<template>
  <div class="home">
    <ul v-for="item in list">
      <li style="list-style: none;float: left">
        <img
          :src="['//fuss10.elemecdn.com/c/14/48d5806f132eee1c634547e637a90jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85']"
          width="70" height="70" :alt=item.name class="rstblock-logo-icon">
      </li>
    </ul>
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
    mounted: function () {
      this.get_data();
    },
    components: {
      Location
    },
    methods: {
      get_data: function () {
        let v = this;
        this.$http.get("static/resource/data.json").then(
          function (res) {
            // 处理成功的结果
            console.log(res);
            let data = JSON.parse(res.bodyText);
            for (let i in data) {
              v.list.push(data[i]);
            }
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
