<template>
  <div class="home">
    <div class="content-menu">
      <el-row>
        <el-col :span="6" v-for="item in list" class="menu-item">
            <div class="rstblock-logo"><img
              src="//fuss10.elemecdn.com/7/09/eb7f81645e8aec03c833cab028627png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85"
              width="70" height="70" alt="峨嵋酒家（牡丹园店）" class="rstblock-logo-icon"><span>{{item.order_lead_time}}分钟</span>
              <div class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign"></div>
            </div>
            <div class="rstblock-content">
              <div class="rstblock-title">{{item.name}}</div>
              <div class="starrating icon-star"><span class="icon-star" style="width:100%;"></span></div>
              <div class="rstblock-cost">{{item.piecewise_agent_fee.description}}</div>
              <div class="rstblock-activity"><i style="background:#fff;color:#999999;border:1px solid;padding:0;">票</i>
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
        value: 5
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
  .menu-item:hover{
    background-color: #f5f5f5;
  }

</style>
