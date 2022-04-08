import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: "games.json",
    games: [],
    dataOpinion: [],
    dataLocal: [],
  },
  getters: {},
  mutations: {
    SETLOCAL(state, payload) {
      state.dataLocal = payload;
    },
    SET_GAMES(state, games) {
      state.games = games;
    },
  },
  actions: {
    async getGames({ commit, state }) {
      try {
        const request = await axios(state.URL);
        const gamersid = request.data.map((game, i) => {
          game.id = "i_d" + i;
          return game;
        });
        commit("SET_GAMES", gamersid);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
