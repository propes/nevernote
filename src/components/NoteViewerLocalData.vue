<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div>
      <ul class="note-list">
        <li v-for="note in notes" :key="note.name">
          <div>
            {{ note.name }}
          </div>
          <button @click="deleteNote(note.name)">delete</button>
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
export default {
  data() {
    return {
      notes: [{ name: "My first note" }, { name: "My second note" }],
      newNote: "",
    };
  },
  methods: {
    saveNote() {
      this.notes.push({ name: this.newNote });
      this.newNote = "";
    },
    deleteNote(name) {
      const i = this.notes.findIndex((n) => n.name === name);
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
