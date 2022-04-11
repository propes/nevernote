import { createStore } from "vuex";
import { uuid } from "vue-uuid";

export default createStore({
  state: {
    notes: [
      {
        id: uuid.v1(),
        title: "My to do list",
        content: "- Walk the dog\n- Wash the cat",
        createdDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
      },
      {
        id: uuid.v1(),
        title: "Random thoughts",
        content: "Would a rose by any other name would smell as sweet?",
        createdDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
      },
    ],
  },
  getters: {},
  mutations: {
    saveNote: (state, note) => {
      const storedNote = state.notes.find((n) => n.id === note.id);
      if (storedNote) {
        storedNote.title = note.title;
        storedNote.content = note.content;
        storedNote.modifiedDate = new Date().toISOString();
      } else {
        if (!note.title) {
          note.title = "Untitled";
        }
        note.createdDate = new Date().toISOString();
        note.modifiedDate = new Date().toISOString();
        state.notes.push({ ...note });
      }
    },
    deleteNote: (state, id) => {
      const i = state.notes.findIndex((n) => n.id === id);
      if (i >= 0) {
        state.notes.splice(i, 1);
      }
    },
  },
  actions: {
    saveNote: (context, note) => context.commit("saveNote", note),
    deleteNote: (context, id) => context.commit("deleteNote", id),
  },
  modules: {},
});
