<script setup>
import Banner from "@/components/Banner.vue";
import NoteList from "@/components/NoteList.vue";
import {ref} from "vue";
const title = ref("Caldm");
const subTitle = ref("路虽远，行则将至；事虽难，做则可成。");
</script>

<template>
  <div id="home">
    <Banner :title="title" :sub-title="subTitle"/>
    <NoteList/>
  </div>
</template>

<style scoped>

</style>
