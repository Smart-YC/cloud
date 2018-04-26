<template>
  <div class="content-menu" v-loading="loading" element-loading-text="正在载入更多商家...">
    <el-row>
      <el-col :span="6" v-for="(item,index) in list" :key="index" class="menu-item">
        <el-popover
          placement="right-start"
          width="250"
          trigger="hover">
          <div>
            <h3>{{item.name}}</h3>
            <p><span class="flavors-type" v-for="(value,n) in item.flavors" :key="n">{{value.name}}</span>
            </p>
            <hr>
            <p v-for="(value,n) in item.supports" :key="n"><i class="flavors-label">{{value.icon_name}}</i>{{value.description}}
            </p>
            <div class="fee-wrap">
              <el-breadcrumb separator="|">
                <el-breadcrumb-item><span>{{item.piecewise_agent_fee.description}}</span></el-breadcrumb-item>
                <el-breadcrumb-item>平均 <span class="text-red">{{item.order_lead_time}}</span>分钟到达</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <p>{{item.promotion_info}}</p>
          </div>
          <el-button type="text" slot="reference" class="menu-wrap">
            <div class="rstblock-logo"><img
              :src=[item.image_path]
              width="70" height="70" :alt=item.name
              class="rstblock-logo-icon">
              <div class="elemeicon elemeicon-premiumsign rstblock-logo-premiumsign">
                <p>{{item.order_lead_time}}分钟</p>
              </div>
            </div>
            <div class="rstblock-content">
              <div class="rstblock-common rstblock-title">{{item.name}}</div>
              <div class="rstblock-common">
                <el-rate
                  v-model="item.rating"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <div class="rstblock-common rstblock-cost">{{item.piecewise_agent_fee.description}}</div>
              <div class="rstblock-common rstblock-activity">
                <i style="background:#fff;color:#999999;border:1px solid;font-size: 12px"
                   v-for="(value,n) in item.supports" :key="n">{{value.icon_name}}</i>
              </div>
            </div>
          </el-button>
        </el-popover>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "allshop",
    data() {
      return {
        list: [],
        loading: true
      }
    },
    mounted: function () {
      this.get_data();
    },
    props: {
      popover: {
        default: 'value'
      }
    },
    methods: {
      get_data: function () {
        let v = this;
        this.$http.get("/static/resource/data.json").then(
          res => {
            // 处理成功的结果
            console.log(res);
            v.loading = false;
            let data = JSON.parse(res.bodyText);
            for (let i in data) {
              v.list.push(data[i]);
            }
          }, res => {
            // 处理失败的结果
            console.group(res);
          }
        );
      },
      showPopover: function (id) {
        this.popover = id;
      }
    }
  }
</script>

<style scoped>
  .content-menu {
    border: 1px solid #e6e6e6;
    background-color: #fff;
    min-height: 140px;
  }

  a {
    text-decoration: none;
  }

  i {
    font-size: 14px !important;
  }

  p {
    font-size: 12px;
  }

  .menu-item {
    border-bottom: 1px #f5f5f5 solid;
    padding: 0 15px 0 15px;
  }

  .menu-wrap {
    width: 100%;
    padding-top: 15px;
  }

  .rstblock {
    background-color: #fff;
    border-bottom: 1px #f5f5f5 solid;
    width: 33.33333%;
  }

  .menu-item:hover {
    background-color: #f5f5f5;

  }

  .menu-item div.rstblock-title:hover {
    color: #0089dc;
  }

  .fee-wrap {
    margin: 3px 5px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    color: #000;
    background-color: #eee;
  }

  .rstblock-logo {
    float: left;
    margin-right: 20px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }

  .rstblock-logo > span {
    margin-top: 5px;
  }

  .text-red {
    color: #f00;
    font-size: 12px;
  }

  .rstblock-content {
    display: inline;
  }

  .flavors-type {
    margin-right: 5px;
    color: #999;
    font-size: 12px;
  }

  .flavors-label {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-align: center;
    width: 18px;
    border-radius: 2px;
    margin-right: 3px;
    padding: 1px;
    background-color: #f63;
    white-space: nowrap;
  }

  .rstblock-common {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    margin-left: 10px;
  }

  .rstblock-title {
    font-size: 16px;
    margin-bottom: 6px;
    font-weight: 600;
    color: #333;
  }

  .rstblock-cost {
    color: #999;
    margin-top: 3px;
    font-size: 12px;
  }

  .rstblock-activity {
    margin-top: 6px;
  }

  .rstblock-activity i {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-align: center;
    width: 18px;
    border-radius: 2px;
    margin-right: 3px;
    padding: 1px;
    background-color: #f63;
    white-space: nowrap;
  }
</style>
