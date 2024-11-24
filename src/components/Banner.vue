<script setup>
import bannerImg from "@/assets/banner.png";
defineProps({
  title: {
    type: String,
    default: "Caldm"
  },
  subTitle: {
    type: String,
    default: "路虽远，行则将至；事虽难，做则可成。"
  }
})
</script>

<template>
  <div id="banner">
    <img
        :src="bannerImg"
        alt="banner"
    />
    <h1>{{title}}</h1>
    <h2>{{subTitle}}</h2>
  </div>
</template>
<style scoped>
#banner {
  height: 300px;
  overflow: hidden;
  position: relative;
}
h1, h2{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;
  text-shadow: 2px 2px 4px #000000;
  color: #ffffff;
}
h1 {
  top: 57%;
  font-size: 3.2em;
}
h2 {
  top: 75%;
  font-size: 1.3em;
}
img {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>
