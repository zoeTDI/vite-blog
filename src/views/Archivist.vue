<script setup>
import data from "@/assets/data.json";
import NoteList from "@/components/NoteList.vue";
const notes = data.sort((a, b) => {
  return parseInt(b.date, 10) - parseInt(a.date, 10);
});
</script>

<template>
  <div id="archivist">
    <NoteList :noteList="notes" />
  </div>
</template>


<style scoped>
</style>
