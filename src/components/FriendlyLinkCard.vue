<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: "User"
  },
  url: {
    type: String,
    default: "#"
  },
  summary: {
    type: String,
    default: "这个人没有留下介绍。"
  }
})
</script>

<template>
  <div id="friendly-link-card">
    <div class="card-cover">
      <a :href= "url" target="_blank"><img :src="`${icon}`" alt="icon"></a>
    </div>
    <div class="card-content">
      <h1><a :href="url" target="_blank">{{ name }}</a></h1>
      <p><a :href= "url" target="_blank">{{ summary }}</a></p>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
#friendly-link-card {
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 8px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  display: flex;
  flex: 0;
  flex-wrap: nowrap;
  gap: 8px;
}
#friendly-link-card:hover {
  box-shadow: 0 0 15px #cbcbcb;
}
.card-cover {
  margin: 8px 0 8px 8px;
  border: 4px solid #c3c4c6;
  flex: 0 0 auto;
  width: 80px;
  max-height: 80px;
  border-radius: 50%;
  overflow: hidden;
}
.card-cover img {
  width: 100%;
  object-fit: cover;
}

.card-content {
  flex: 1 1 100%;
  margin: .75em 0 0 8px;
}

.card-content h1 {
  font-size: 1.5em;
  margin-bottom: .2em;
}

.card-content p {
  width: 90%;
  font-size: .9em;
  line-height: 1.5;
  overflow: hidden;
}
</style>