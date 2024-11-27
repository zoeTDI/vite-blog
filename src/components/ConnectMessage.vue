<script setup>
import Markdown from "@/components/Markdown.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
// "http://localhost:8080/api/connect/getContent"
const content = ref('');
async function fetchContent() {
  try {
    await axios.get("http://localhost:8080/api/connect/getContent")
        .then( (resp) => {
          content.value = resp.data;
        });
  } catch (error) {
    content.value = "Error fetching content.";
    console.error("Error fetching content:", error);
  }
}
onMounted( () => {
  fetchContent();
})
</script>

<template>
<div id="connect-message">
  <div class="title">
    <h2>关于我</h2>
  </div>
  <div class="content">
    <Markdown :content="content" />
  </div>
</div>
</template>

<style scoped>
h2 {
  text-align: center;
  line-height: 2em;
}
</style>