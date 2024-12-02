<script setup>

import NoteCard from "@/components/NoteCard.vue";
// import data from "../../public/data.json";
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";
import axios from "axios";

const noteData = ref([]);
const route = useRoute();

// data 的数据该从 http://localhost:8080/api/getNotes@latest 初获取
async function fetchNotes() {
  const res = await axios.get("http://localhost:8080/api/getNotes@latest", {
    params: {
      size: 10,
      page: 1
    }
  });
  noteData.value = res.data;
  console.log(noteData.value);
}

onMounted(() => {
  fetchNotes();
})
watch(noteData, (newNoteData) => {
  noteData.value = newNoteData;
})
watch(() => route.params.cate, (newCate) => {
  if (newCate === 'all') {
    noteData.value = data;
  } else {
    noteData.value = data.filter(note => note.category === newCate);
  }
})
</script>

<template>
  <div id="notes">
    <NoteCard
        v-side-in
        v-for="(note, index) in noteData"
        :key="index"
        :pic="note.pic"
        :title="note.title"
        :summary="note.summary.split('\n\n').slice(0, 1).join('\n\n')"
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
