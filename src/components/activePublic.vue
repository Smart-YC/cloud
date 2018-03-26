<template>
  <div class="activePublic ">
    <!-- 步骤组件 -->
    <el-steps :space="200" default-active="/step1" class="step" :route="true">
      <el-step title="活动信息" index="/step1" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>
    <!-- 视图 -->
    <router-view class="view"></router-view>
    <div class="but-group">
      <el-button>预览</el-button>
      <el-button>上一步</el-button>
      <el-button type="primary">下一步</el-button>
      <el-button type="primary">发布活动</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "active-public"
  }
</script>

<style scoped>

</style>
