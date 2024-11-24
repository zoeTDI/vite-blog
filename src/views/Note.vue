<script setup>
import Note from "@/components/Note.vue";
import data from "../../public/data.json";
import {useRoute} from "vue-router";
const note = data.filter(note => note.id === useRoute().params.id)[0];
window.scroll(0, 0);
</script>

<template>
  <div id="note">
    <Note
        :pic="note.pic"
        :title="note.title"
        :content="note.content"
        :author="note.author"
    />
  </div>
</template>

<style scoped>
#note {
  min-height: 100vh;
  background-color: #fff;
}
</style>
