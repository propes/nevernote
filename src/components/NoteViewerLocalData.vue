<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div>
      <ul class="note-list">
        <li v-for="note in notes" :key="note.id">
          <div>
            {{ note.name }}
          </div>
          <button @click="deleteNote(note.id)">delete</button>
        </li>
      </ul>
    </div>
  </div>

  <div>
    <textarea v-model="newNote"></textarea>
    <button @click="saveNote">Save</button>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      notes: [
        { id: uuid.v1(), name: "My first note" },
        { id: uuid.v1(), name: "My second note" },
      ],
      newNote: "",
    };
  },
  methods: {
    saveNote() {
      this.notes.push({ id: uuid.v1(), name: this.newNote });
      this.newNote = "";
    },
    deleteNote(id) {
      const i = this.notes.findIndex((n) => n.id === id);
      if (i >= 0) {
        this.notes.splice(i, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.note-list {
  li {
    list-style: none;
  }
}
</style>
