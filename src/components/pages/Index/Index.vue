<template>
  <div class="home">
    <Location></Location>
    <Classify></Classify>
    <router-view></router-view>
  </div>
</template>

<script>
  import Location from '@/components/common/Location'
  import Classify from '@/components/common/Classify'

  export default {
    name: "home",
    components: {
      Location, Classify
    },
  }
</script>

<style scoped>
  .home {
    width: 100%;
    clear: both;
  }

</style>
