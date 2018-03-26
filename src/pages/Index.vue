<template>
  <div class="home ">
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
        loading: false
      }
    },
    created: function () {
      this.openFullScreen();
      console.group('created 创建完毕状态===============》');
      this.get_data();
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
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
      }
    }
  }
</script>

<style scoped>

</style>
