<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState} from 'vuex'

  export default {
    name: "count",
    data() {
      return {
        msg: 'hello vuex'
      }
    },
    // computed: { //第一种方法
    //   count() {
    //     return this.$store.state.count;
    //   }
    // },
    // computed: mapState({  //第二种方法
    //   count: state => state.count
    // })
    computed: mapState(['count']),//第三种方法（最简单）
    store
  }
</script>

<style scoped>
</style>
