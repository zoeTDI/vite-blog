<script setup>
import {ref} from "vue";
const nickname = ref('');
const email = ref('');
const message = ref('');
</script>

<template>
  <div id="message-board">
    <form action="">
      <div class="form-container">
        <!--昵称  输入框  邮箱  输入框-->
        <label for="nickname">昵称</label>
        <input type="text" id="nickname" v-model="nickname" required>

        <!-- 邮箱 输入框 -->
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="email" required>
        <!--      多行输入框-->
        <textarea
            id="message"
            v-model="message"
            required
            placeholder="留言"></textarea>
        <input type="submit" value="发送">
      </div>
    </form>
  </div>
</template>

<style scoped>

.form-container {
  display: grid;
  border: 1px solid #ada3a3;
  overflow: hidden;
  border-radius: 5px;
  align-items: center;
  grid-template-columns: 8em  1fr 8em 1fr;
  grid-template-rows: 32px 1fr 28px;
}

label {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid #ada3a3;
  border-left: 1px solid #ada3a3;
  background-color: #e3e3e3;
}

input[type="text"],
input[type="email"] {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-left: 1px solid #eceef0;
  border-radius: unset;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
}


textarea {
  resize: none;
  grid-area: 2 / 1 / 3 / 5;
  height: 120px;
  border: none;
  border-top: 1px solid #ada3a3;
}

textarea::placeholder {
  color: #999;
  font-style: italic;
  font-size: 14px;
  opacity: 0.7;
}

input[type="submit"] {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  grid-area: 3 / 1 / 4 / 5;
  border: none;
}

input[type="submit"]:active {
  background-color: #c5c5c5;
}
</style>