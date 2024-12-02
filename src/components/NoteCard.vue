<script setup>
import MarkdownIt from "markdown-it";
import {useAdjustImageSize} from "@/js/useAdjustImageSize.js";

const props = defineProps({
  pic: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  summary: {
    type: String,
    default: ""
  },
  date: {
    type: String,
    default: ""
  },
  tags: {
    type: Array,
    default: () => ([])
  },
  link: {
    type: Object,
    default: () => ({})
  }
})
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})
const rs = md.render(props.summary);
const {noteImage, adjustImageSize} = useAdjustImageSize();
</script>

<template>
  <div class="note-card">
    <div class="header">
      <h1>
        <router-link :to="link">{{ title }}</router-link>
      </h1>
    </div>
    <div class="content">
      <div class="image-container">
        <img
            ref="noteImage"
            :src="pic"
            alt="cover"
            @load="adjustImageSize"
        >
      </div>
      <div class="text-container">
        <p v-html="rs"></p>
        <div class="footer">
          <p class="date">
            {{ date.slice(0, 4) }} - {{ date.slice(4, 6) }}
            -
            {{ date.slice(6, 8) }}
            {{ date.slice(8, 10) }}:{{ date.slice(10, 12) }}
          </p>
          <div class="tags">
            <p
                v-for="(tag, index) in tags"
                :key="index"
                class="tag"
            >
              {{ tag }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.note-card {
  border: 1px solid #eceef0;
  border-radius: 15px;
  margin: 1em 0;
  padding: 1em;
  width: 100%;
  height: 260px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
}

.note-card:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}

.header {
  margin-bottom: 1em;
}

.header h1 {
  font-size: 1.2em;
}

.header a {
  color: #2c3e50;
}

.content {
  height: calc(100% - 1em - 25px);
  display: flex;
}

.image-container {
  flex: 1;
  margin-right: 1em;
  overflow: hidden;
}

.image-container img {
  border: 1px solid #eceef0;
  border-radius: 5px;
  object-fit: cover;
}

.text-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-container p {
  font-size: 1em;
  line-height: 1.5;
}

.footer {
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  gap: 1em;
}

.date {
  flex: 1 0 auto;
  font-size: 0.9em;
  color: #666;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin: 4px;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
  color: #666;
}
</style>
