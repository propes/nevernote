<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div class="note-viewer-container">
      <div class="note-selector">
        <ul>
          <li v-for="note in notes" :key="note.id">
            <div class="note-selector-item">
              <div class="note-selector-item-title">
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
          id: n.id,
          title: n.title,
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
    saveNote() {
      this.$store.commit("addNote", this.currentNote);
      this.resetCurrentNote();
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

.note-selector {
  margin: 0;
  padding-right: 10px;
  min-width: 200px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .note-selector-item {
    display: flex;
    justify-content: space-between;
  }

  .note-selector-item-title {
    padding-right: 10px;
  }
}

.note-editor {
}

.action-bar {
  display: flex;
  justify-content: flex-end;
}
</style>
