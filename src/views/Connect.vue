<script setup>
import ConnectMessage from "@/components/ConnectMessage.vue";
import MessageBoard from "@/components/MessageBoard.vue";
</script>

<template>
  <div id="connect">
      <div class="wrapper">
        <ConnectMessage id="connect-message" />
        <MessageBoard id="message-board" />
      </div>
  </div>
</template>

<style scoped>
#connect {
  min-height: max-content;
  margin: 0 1em 1em;
  padding-bottom: 5em;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  transition: box-shadow 0.3s;
}
#connect:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}
.wrapper {
  max-width: 80%;
  margin: 2em auto 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
#connect-message:after {
  display: block;
  content: "";
  min-height: 64px;
  min-width: 100%;
}
</style>
