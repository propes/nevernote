<template>
  <div class="list-view">
    <ul>
      <li v-for="note in notes" :key="note.id">
        <div class="list-view-item mb-1">
          <div class="list-view-item-title pr-2" @click="selectNote(note)">
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
</template>

<script>
export default {
  name: "ListView",
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectNote(note) {
      this.$emit("selectNote", note);
    },
    deleteNote(id) {
      this.$emit("deleteNote", id);
    },
  },
};
</script>

<style lang="scss" scoped>
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

    &-title {
      width: 100%;
    }
  }
}
</style>
