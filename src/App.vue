<script setup>
import TopNav from './components/TopNav.vue'
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div id="app">
    <TopNav />
    <div class="wrapper">
      <div id="sidebar">
        <SideBar />
      </div>
      <div id="main">
        <RouterView />
      </div>
    </div>

  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  background-color: #f8f8f8;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 90em;
  margin: auto;
}

::-webkit-scrollbar {
  width: 0;
}
.wrapper {
  display: flex;
  flex: 0;
}
#sidebar {
  flex: 0 0 auto;
  flex-wrap: nowrap;
  margin: .5em 1em;
}
#main {
  flex: 1 1 auto;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-top: 1.5em;
  margin-right: 1em;
}
</style>
