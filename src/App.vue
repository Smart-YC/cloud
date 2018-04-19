<template>
  <div id="app">
    <!--顶部导航-->
    <div class="app-wrap">
      <div class="app-container">
        <Nav></Nav>
      </div>
    </div>
    <!--右侧工具栏-->
    <RightBar></RightBar>
    <!--内容区域-->
    <main class="content">
      <router-view class="view"></router-view>
    </main>
    <!--底部版本信息-->
    <div class="footer">
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/common/Nav'
  import RightBar from '@/components/common/RightBar'
  import Foot from '@/components/common/Foot'

  export default {
    name: 'App',
    data: function () {
      return {
        menuData: []
      }
    },
    components: {
      Nav, RightBar, Foot
    },
    computed: {
      onRoutes: function () {
        return this.$route.path.replace('/', '');
      }
    },
    mounted: function () {
      // this.get_data();
      // console.log(this.menuData)
    },
    methods: {
      get_data: function () {
        let v = this;
        this.$http.get("static/resource/data.json").then(
          function (res) {
            // 处理成功的结果
            console.group(res);
            v.menuData = res.bodyText;
          }, function (res) {
            // 处理失败的结果
            console.log(res);
          }
        );
      },
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
  }

  .app-wrap {
    display: block;
    height: 60px;
    background-color: #1e89e0;
  }

  .app-container {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    height: 800px;
  }

  .footer {
  border-top: 1px solid #e6e6e6;
  }
</style>
