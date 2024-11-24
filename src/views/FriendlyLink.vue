<script setup>
import Banner from "@/components/Banner.vue";
import FriendlyLinkList from "@/components/FriendlyLinkList.vue";
import {ref} from "vue";
const title = ref("友情链接");
const subTitle = ref("有朋自远方来，不亦说乎。");
</script>

<template>
<div id="friendly">
  <Banner :title="title" :sub-title="subTitle"/>
  <FriendlyLinkList />
</div>
</template>

<style scoped>

</style>