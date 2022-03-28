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
.note-list {
  li {
    list-style: none;
  }
}
</style>
