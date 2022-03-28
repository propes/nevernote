<template>
  <div>
    <div>
      <h1>My Notes</h1>
    </div>

    <div>
      <ul class="note-list">
        <li v-for="note in notes" :key="note.name">
          {{ note.name }}
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
