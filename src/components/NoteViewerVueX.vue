<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div class="note-viewer-container">
      <div class="list-view">
        <ul>
          <li v-for="note in notes" :key="note.id">
            <div class="list-view-item" @click="selectNote(note)">
              <div class="pr-2">
                <div>{{ note.title }}</div>
                <div>
                  <small>{{ note.contentPreview }}</small>
                </div>
              </div>
              <div>
                <button @click="deleteNote(note.id)">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="note-editor">
        <div>
          <input type="text" v-model="currentNote.title" />
        </div>
        <div>
          <textarea v-model="currentNote.content"></textarea>
        </div>
        <div class="action-bar">
          <button @click="saveNote">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { previewString } from "../utils/stringUtils";

export default {
  data() {
    return {
      currentNote: null,
    };
  },
  created() {
    this.resetCurrentNote();
  },
  computed: {
    notes() {
      return this.$store.state.notes.map((n) => {
        return {
          ...n,
          contentPreview: previewString(n.content),
        };
      });
    },
  },
  methods: {
    resetCurrentNote() {
      this.currentNote = {
        title: "",
        content: "",
      };
    },
    selectNote(note) {
      this.currentNote = { ...note };
    },
    saveNote() {
      console.log(this.currentNote);
      this.$store.commit("saveNote", this.currentNote);
    },
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.note-viewer-container {
  margin-top: 30px;
  display: flex;
}

.list-view {
  margin: 0;
  padding-right: 10px;
  min-width: 200px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &-item {
    padding: 0.1em;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      background-color: whitesmoke;
    }
  }
}

.note-editor {
}

.action-bar {
  display: flex;
  justify-content: flex-end;
}
</style>
