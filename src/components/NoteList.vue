<script setup>

import NoteCard from "@/components/NoteCard.vue";
import data from "../../public/data.json";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
const noteData = ref(data);
const route = useRoute();
watch(noteData, (newNoteData) => {
  noteData.value = newNoteData;
})
watch(() => route.params.cate, (newCate) => {
  if (newCate === 'all') {
    noteData.value = data;
  }else {
    noteData.value = data.filter(note => note.category === newCate);
  }
})
</script>

<template>
  <div id="notes">
    <NoteCard
        v-for="(note, index) in noteData"
        :key="index"
        :pic="note.pic"
        :title="note.title"
        :summary="note.content.split('\n\n').slice(0, 1).join('\n\n')"
        :date="note.date"
        :tags="note.tags"
        :link="{ name: 'Note', params: { id: note.id } }"
    />
  </div>
</template>
<style scoped>
#notes {
  margin: 1em;
}
</style>
