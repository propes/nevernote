import { createStore } from "vuex";
import { uuid } from "vue-uuid";

export default createStore({
  state: {
    notes: [
      { id: uuid.v1(), name: "My first note" },
      { id: uuid.v1(), name: "My second note" },
    ],
  },
  getters: {},
  mutations: {
    addNote: (state, name) => {
      state.notes.push({ id: uuid.v1(), name: name });
    },
    deleteNote: (state, id) => {
      const i = state.notes.findIndex((n) => n.id === id);
      if (i >= 0) {
        state.notes.splice(i, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
