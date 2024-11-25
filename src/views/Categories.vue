<script setup>
import NoteList from "@/components/NoteList.vue";
import Banner from "@/components/Banner.vue";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
const route = useRoute();
const search = ref(route.params.cate);
watch(() => route.params.cate, (newCate) => {
  search.value = newCate;
})
</script>

<template>
  <div id="categories">
    <Banner :title="search === 'all' ? '分类' : search"
            :sub-title="search === 'all' ? '' : `浏览「${search}」下的所有文章`"/>
    <NoteList />
  </div>
</template>


<style scoped>
</style>
