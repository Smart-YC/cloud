<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}}</h3>
    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>
    <hr>
    <h3>{{count}}</h3>
    <div>
      <button @click="addActions">+</button>
      <button @click="reduceActions">-</button>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
    name: "count",
    data() {
      return {
        msg: 'hello vuex'
      }
    },
    computed: { //第一种方法
      count() {
        return this.$store.state.a.count;
      }
    },
    // computed: mapState({  //第二种方法
    //   count: state => state.count
    // })
    // computed: {
    //   ...mapState(['count']),
    // count() {
    //   return this.$store.getters.count;
    // }
    // ...mapGetters(['count'])
    // },//第三种方法（最简单）
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addActions', 'reduceActions'])
    },
    store
  }
</script>

<style scoped>
</style>
