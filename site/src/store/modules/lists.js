const getters = {
  lists: state => state.lists,
};

const mutations = {
  SET_LISTS(state, lists) {
    state.lists = lists;
  },
};

const state = {
  lists: [],
};

const actions = {
  getLists({ commit }, cards) {
    const lists = [
      {
        id: 1,
        name: 'ToDo',
        board: 1,
      },
      {
        id: 2,
        name: 'ToDo',
        board: 2,
      },
      {
        id: 3,
        name: 'Finish',
        board: 1,
      },
    ];

    lists.forEach((element) => {
      element.cards = [];
    });

    for (let i = 0; i < cards.length; i += 1) {
      for (let j = 0; j < lists.length; j += 1) {
        if (cards[i].list === lists[j].id) {
          lists[j].cards.push(cards[i]);
        }
      }
    }

    commit('SET_LISTS', lists);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
