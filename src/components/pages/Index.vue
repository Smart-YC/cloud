<template>
  <div class="home">
    <div class="content-menu">
      <el-row>
          <el-col :span="6" v-for="item in list" class="menu-item">
            <div class="rstblock-logo"><img
              :src=[item.image_path]
              width="70" height="70" :alt=item.name
              class="rstblock-logo-icon"><br><span>{{item.order_lead_time}}分钟</span>
              <div class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign"></div>
            </div>
            <div class="rstblock-content">
              <div class="rstblock-title">{{item.name}}</div>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <div class="rstblock-cost">{{item.piecewise_agent_fee.description}}</div>
              <div class="rstblock-activity"><i
                style="background:#fff;color:#999999;border:1px solid;padding:0;font-size: 12px">票</i>
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Location from '@/components/common/Location'

  export default {
    name: "home",
    data() {
      return {
        list: [],
        value: 3.7
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
    clear: both;
  }

  .content-menu {
    border: 1px solid #e6e6e6;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }

  .menu-item {
    border-bottom: 1px #f5f5f5 solid;
    padding: 20px;
    cursor: pointer;
  }

  .rstblock {
    background-color: #fff;
    border-bottom: 1px #f5f5f5 solid;
    width: 33.33333%;
  }

  .menu-item:hover {
    background-color: #f5f5f5;
  }

  .rstblock-logo {
    float: left;
    margin-right: 10px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }

  .rstblock-content {
    display: inline;
  }

  .rstblock-title {
    font-size: 16px;
    margin-bottom: 6px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
  }

  .rstblock-cost {
    color: #999;
    margin-top: 3px;
    font-size: 12px;
  }
</style>
