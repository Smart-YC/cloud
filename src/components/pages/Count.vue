<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';

  export default {
    name: "count",
    data() {
      return {
        msg: 'hello vuex'
      }
    },
    store
  }
</script>

<style scoped>
</style>
