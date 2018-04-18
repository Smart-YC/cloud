<template>
    <div>
      <ul>
        <li>收银</li>
        <li>店铺</li>
        <li>商品</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "left-nav"
    }
</script>

<style scoped>
  .left-nav{
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #409EFF;
    float: left;
    width: 5%;
  }
  .iconfont{
    font-size: 24px;
  }
  .left-nav ul{
    padding: 0px;
    margin: 0px;
  }
  .left-nav li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid red;
  }
</style>
