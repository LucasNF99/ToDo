const getters = {
  boards: state => state.boards,
};

const mutations = {
  SET_BOARDS(state, boards) {
    state.boards = boards;
  },
};

const state = {
  boards: [],
};

const actions = {
  getBoards({ commit }) {
    const boards = [
      { id: 1, name: 'Nhtracking', router: { name: 'nhtracking' } },
      { id: 2, name: 'Fatec', router: { name: 'fatec' } },
      { id: 3, name: 'Projetos', router: { name: 'projects' } },
    ];
    commit('SET_BOARDS', boards);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
