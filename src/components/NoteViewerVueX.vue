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
              <div class="note-selector-item-name">
                {{ note.name }}
              </div>
              <button @click="deleteNote(note.id)">del</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="note-editor">
        <div>
          <textarea v-model="newNote"></textarea>
        </div>
        <div class="action-bar">
          <button @click="saveNote">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: "",
    };
  },
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    saveNote() {
      this.$store.commit("addNote", this.newNote);
      this.newNote = "";
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

  .note-selector-item-name {
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
