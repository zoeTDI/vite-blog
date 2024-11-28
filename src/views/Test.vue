<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import NoteCard from "@/components/NoteCard.vue";

const note = ref({});
async function fetchNote() {
  try {
    const res = await axios.get("http://localhost:8080/api/note/getNoteCard");
    console.log(res.data);
    note.value = res.data;
  } catch (error) {
    console.error("Error fetching note");
  }
}
onMounted(() => {
  fetchNote();
})
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">测试页</h2>
              <h3>res.data</h3>
              <p v-if="!note">loading ...</p>
              <p v-else>{{note}}</p>
              <h3>NoteCard</h3>
              <NoteCard :pic="note.pic"
                        :title="note.title"
                        :summary="note.summary"
                        :date="note.date"
                        :tags="note.tags"
                        :link="note.link || {name : 'Home', params: {}}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>