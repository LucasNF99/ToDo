import Vue from 'vue';
import Vuex from 'vuex';
import boards from './modules/boards';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: { boards },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: true,
  });

  return Store;
}
