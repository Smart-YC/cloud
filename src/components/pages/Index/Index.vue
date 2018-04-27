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
  }
</script>

<style scoped>
  .home {
    width: 100%;
    clear: both;
  }

</style>
