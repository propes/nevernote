<template>
  <NoteViewer />
</template>

<script>
import NoteViewer from "./components/NoteViewerVueX.vue";

export default {
  name: "App",
  components: {
    NoteViewer,
  },
};
</script>

<style lang="scss">
@import "./styles/whitespace.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px 20px;
}
</style>
