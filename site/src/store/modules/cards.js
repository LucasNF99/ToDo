const getters = {
  cards: state => state.cards,
};

const mutations = {
  SET_CARDS(state, cards) {
    state.cards = cards;
  },
};

const state = {
  cards: [],
};

const actions = {
  getCards({ commit }) {
    const cards = [
      {
        id: 1, name: 'Card', caption: 'Legenda', responsible: 'true', list: 1,
      },
      {
        id: 2, name: 'Card', caption: 'Legenda', responsible: 'true', list: 1,
      },
      {
        id: 3, name: 'Card', caption: 'Legenda', responsible: 'true', list: 2,
      },
      {
        id: 4, name: 'Card4', caption: 'Legenda', responsible: '', list: 1,
      },
    ];

    commit('SET_CARDS', cards);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
