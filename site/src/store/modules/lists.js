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

let id = 3;

const getters = {
  lists: state => state.lists,
};

const mutations = {
  SET_LISTS(state, mylists) {
    state.lists = mylists;
  },
};

const state = {
  lists: [],
};

const actions = {
  getLists({ commit }, cards) {
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
  createList({ commit }, name) {
    id += 1;
    const newList = {
      id,
      name,
      board: 1,
    };
    lists.push(newList);
    commit('SET_LISTS', lists);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
