<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div class="note-viewer-container">
      <div class="left-panel mr-2">
        <div class="mb-2 flex-align-right">
          <button @click="createNote">new</button>
        </div>
        <ListView
          :notes="notes"
          @select-note="selectNote"
          @delete-note="deleteNote"
        />
      </div>
      <div class="right-panel">
        <div>
          <small class="mr-2"
            >Created Date: {{ currentNote.createdDateFormatted }}</small
          >
          <small>Modified Date: {{ currentNote.modifiedDateFormatted }}</small>
        </div>
        <div>
          <input class="form-input" type="text" v-model="currentNote.title" />
        </div>
        <div class="editor">
          <textarea class="form-input" v-model="currentNote.content"></textarea>
        </div>
        <div class="flex-align-right">
          <button @click="saveNote">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { uuid } from "vue-uuid";

import ListView from "./ListView.vue";

import { previewString } from "../utils/stringUtils";

export default {
  name: "NoteViewerVueX",
  components: { ListView },
  data() {
    return {
      currentNote: null,
    };
  },
  created() {
    this.createNote();
  },
  computed: {
    notes() {
      return this.$store.state.notes.map((n) => {
        return {
          ...n,
          contentPreview: previewString(n.content),
          createdDateFormatted: moment(n.createdDate).format(
            "DD MMM yy HH:mm:ss"
          ),
          modifiedDateFormatted: moment(n.modifiedDate).format(
            "DD MMM yy HH:mm:ss"
          ),
        };
      });
    },
  },
  methods: {
    createNote() {
      this.currentNote = {
        id: uuid.v1(),
        title: "",
        content: "",
      };
    },
    selectNote(note) {
      this.currentNote = { ...note };
    },
    saveNote() {
      this.$store.commit("saveNote", this.currentNote);
      this.currentNote = this.getNote(this.currentNote.id);
    },
    deleteNote(id) {
      this.$store.commit("deleteNote", id);
      this.createNote();
    },
    getNote(id) {
      return this.notes.find((n) => n.id === id);
    },
  },
};
</script>

<style lang="scss" scoped>
.note-viewer-container {
  margin-top: 30px;
  display: flex;
}

.left-panel {
  min-width: 200px;
}

.right-panel {
  min-width: 400px;
}

.form-input {
  width: 100%;
  margin-bottom: 0.2em;
}

.list-view {
  margin: 0;

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

.editor {
  textarea {
    min-height: 300px;
    resize: none;
  }
}

.flex-align-right {
  display: flex;
  justify-content: flex-end;
}
</style>
