<script setup>
import FriendlyLinkCard from "@/components/FriendlyLinkCard.vue";
import data from "../../public/friendlyLink.json";
</script>

<template>
  <div id="friendly-link-list">
    <div class="card-list">
      <FriendlyLinkCard v-for="(item, index) in data"
                        :key="index"
                        :icon="item.icon"
                        :name="item.name"
                        :url="item.url"
                        :summary="item.summary"/>
    </div>
  </div>
</template>

<style scoped>
#friendly-link-list {
  min-height: 62vh;
  margin: 1em;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

#friendly-link-list:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}

.card-list {
  max-width: 80%;
  margin: 2.5em auto auto;
  padding: 2em 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  column-gap: 4em;
}

</style>