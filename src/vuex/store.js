import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1
};
const mutations = {//改变
  add(state) {
    state.count++;
  },
  reduce(state) {
    state.count--;
  }
};
export default new Vuex.Store({
  state, mutations
})
