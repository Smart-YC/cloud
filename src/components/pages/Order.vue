<template>
  <div class="order">
    <p>{{$route.name}}</p>
    <button @click="goBack">后退</button>
    <button @click="goGo">前进</button>
    <button @click="goHome">返回首页</button>

  </div>
</template>

<script>
  export default {
    name: "order",
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      goGo(){
        this.$router.go(1);
      },
      goHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .activity {
    margin-top: 60px;
  }
</style>
