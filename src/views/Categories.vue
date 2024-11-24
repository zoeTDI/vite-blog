<script setup>
import NoteList from "@/components/NoteList.vue";
import data from "@/assets/data.json";
import {useRoute} from "vue-router";

const notes = data.filter(e => e.category === (useRoute().params.cate === "all" ? e.category : useRoute().params.cate));
const searchText = useRoute().params.cate;
</script>

<template>
  <div id="categories">
    <NoteList :notes="notes" :search="searchText"/>
  </div>
</template>


<style scoped>
</style>
