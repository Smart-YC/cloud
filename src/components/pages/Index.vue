<template>
  <div class="home">
    <!--轮播图-->
    <el-carousel height="960px" :interval="5000">
      <el-carousel-item v-for="item in 2" :key="item">
      </el-carousel-item>
    </el-carousel>
    <!--广告页-->
    <div class="advertise-wrap">
      <div class="advertise-container">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-one">
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-two">
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-three">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--介绍-->
    <div class="introduce-container">
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content">
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content text-right">
            <h1>星享俱乐部</h1>
            <p>开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。</p>
            <a href="#">了解更多></a>
            <br>

            <div style="margin-top: 10px">
              <el-row>
                <el-button type="success" round>注册</el-button>
                <el-button type="success" round>登录</el-button>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content" style="text-align: center">
            <h3>心情惬意，来杯咖啡吧</h3>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
          </div>
        </el-col>
      </el-row>
    </div>
    <!--精选-->
    <div class="advertise-wrap">
      <div class="advertise-container">
        <div style="text-align: center">
          <h3>星巴克精选</h3>
          <h5>在星巴克天猫旗舰店发现更多咖啡心意</h5>
        </div>
        <div style="margin: 0 auto">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/images/choiceness/tmall-card-01.png" class="image">
                  <div style="padding: 14px;text-align: center">
                    <h3>星享卡</h3>
                    <p>开始您的<br>星巴克专属之旅</p>
                    <a href="#">了解更多</a>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/images/choiceness/tmall-card-02.png" class="image">
                  <div style="padding: 14px;text-align: center">
                    <h3>星享卡</h3>
                    <p>开始您的<br>星巴克专属之旅</p>
                    <a href="#">了解更多</a>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/images/choiceness/tmall-eticket.png" class="image" height="92">
                  <div style="padding: 14px;text-align: center">
                    <h3>星享卡</h3>
                    <p>开始您的<br>星巴克专属之旅</p>
                    <a href="#">了解更多</a>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/images/choiceness/tmall-reserve.png" class="image" height="92">
                  <div style="padding: 14px;text-align: center">
                    <h3>星享卡</h3>
                    <p>开始您的<br>星巴克专属之旅</p>
                    <a href="#">了解更多</a>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!--讲堂-->
    <div class="advertise-container">
      <div style="text-align: center">
        <h1>1912 派克街 | 咖啡星讲堂</h1>
        <h5>了解更多星巴克咖啡文化</h5>
      </div>
    </div>
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
