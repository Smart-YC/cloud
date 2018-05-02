import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1
};
const mutations = {//改变
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
};
const getters = {//过滤属性
  count(state) {
    return state.count += 90;
  }
};
const actions = {//异步
  addActions(context) {
    context.commit('add', 10);
    setTimeout(() => {
      context.commit('reduce');
    }, 3000)
  },
  reduceActions({commit}) {
    commit('reduce');
  }
};
export default new Vuex.Store({
  state, mutations, getters, actions
})
