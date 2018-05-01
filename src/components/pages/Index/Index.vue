<template>
  <div class="home">
    <Location></Location>
    <router-view></router-view>
  </div>
</template>

<script>
  import Location from '@/components/common/Location'

  export default {
    name: "home",
    components: {
      Location
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("进入模板");
      next();
    },
    beforeRouteLeave:(to,from,next)=>{
      console.log("离开模板");
      next();
    }
  }
</script>

<style scoped>
  .home {
    width: 100%;
    clear: both;
  }

</style>
