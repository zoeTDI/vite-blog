<script setup>
import NoteCard from "@/components/NoteCard.vue";
import data from "@/assets/data.json";
import {ref} from "vue";
import {useRoute} from "vue-router";
const search = ref(useRoute().params.cate);
const notes = ref(data);
</script>

<template>
  <div id="notes">
    <NoteCard
        v-for="(note, index) in notes"
        :key="index"
        :pic="note.pic"
        :title="note.title"
        :summary="note.content.split('\n')[0] + '……'"
        :date="note.date"
        :tags="note.tags"
        :link="{ name: 'Note', params: { id: note.id } }"
        v-show=" useRoute().name === 'Home' || search === note.category || search === 'all'"
    />
  </div>
</template>


<style scoped>
#notes {
  margin: 1em;
}
</style>
