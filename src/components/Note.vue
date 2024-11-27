<script setup>
import Markdown from "@/components/Markdown.vue";
defineProps({
  pic: String,
  title: String,
  content: String,
  date: {
    year: Number,
    month: Number,
    day: Number
  },
  author: String,
  tags: Array
});
</script>

<template>
  <div class="note">
    <img
        class="banner"
        :src="pic"
        alt="banner"
    >
    <div class="header">
      <h1>{{ title }}</h1>
      <h2>{{ author }}</h2>
    </div>
    <div class="body">
      <Markdown :content="content" />
    </div>
  </div>
</template>

<style scoped>
/* .note {
  outline: 1px solid #aaa;
} */

.note {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  position: relative;
}
.note .banner {
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  overflow: hidden;
  position: relative;
}
.banner img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header,
.body {
  margin: 1em 4.5em;
}

.note .header h1 {
  text-align: center;
  font-size: 2em;
}

.note .header h2 {
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  color: #aaa;
  margin: 0;
  padding: 0;
  margin-top: 0.5em;
  margin-bottom: 1em;
}
</style>
