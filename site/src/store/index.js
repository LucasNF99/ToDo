import Vue from 'vue';
import Vuex from 'vuex';
import boards from './modules/boards';
import lists from './modules/lists';
import cards from './modules/cards';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: { boards, lists, cards },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false,
  });

  return Store;
}
