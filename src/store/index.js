import { createStore } from "vuex";
import { uuid } from "vue-uuid";

export default createStore({
  state: {
    notes: [
      {
        id: uuid.v1(),
        title: "My to do list",
        content: "- Walk the dog\n- Wash the cat",
      },
      {
        id: uuid.v1(),
        title: "Random thoughts",
        content: "Would a rose by any other name would smell as sweet?",
      },
    ],
  },
  getters: {},
  mutations: {
    addNote: (state, note) => {
      if (!note.title) {
        note.title = "Untitled";
      }
      state.notes.push({ id: uuid.v1(), ...note });
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
