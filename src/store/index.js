import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: "games.json",
    games: [],
  },
  getters: {},
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
      console.log(state.games);
    },
  },
  actions: {
    async getGames({ commit, state }) {
      try {
        const request = await axios(state.URL);
        const gamersid = request.data.map((game, i) => {
          game.id = i;
          return game;
        });
        commit("SET_GAMES", gamersid);
        console.log(request.data);
        console.log(gamersid);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
