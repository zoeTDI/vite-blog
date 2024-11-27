<script setup>
import logoImage from '@/assets/logo.png'
const navList = [
  { name: '', path: '/', classList: ['logo'] },
  { name: 'Caldm', path: '/', classList: ['title'] },
  { name: '主页', path: '/', classList: ['tab'] },
  { name: '归档', path: '/archivist/all', classList: ['tab'] },
  { name: '友链', path: '/friendlyLink', classList: ['tab'] },
  { name: '联系我', path: '/connect', classList: ['tab'] },
  { name: '测试', path: '/test', classList: ['tab'] }
];
const isLogo = 0;
</script>

<template>
  <div id="nav">
    <div class="nav-list">
      <ul>
        <li
            v-for="(item, index) in navList"
            :key="index"
            :class="item.classList"
        >
          <router-link :to="item.path">
            <img
                v-if="index === isLogo"
                :src="logoImage"
                alt="logo"
            />
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
a {
  text-decoration: none;
  color: white;
}

#nav {
  background-color: black;
  color: white;
  width: 100%;
  height: 64px;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.nav-list {
  width: 95%;
  max-width: 116em;
  margin: auto;
}

.nav-list ul {
  list-style-type: none;
  margin: auto 0;
  width: 100%;
  display: flex;
  flex: 0 1 60px;
}

.nav-list li {
  display: flex;
  text-align: center;
}

.nav-list a {
  margin: auto;
  display: block;
  padding: 0.5em 0.8em;
}

.logo {
  flex-basis: 50px;
  margin: auto 1em;
}

.logo a {
  width: 50px;
  height: 50px;
  margin: 0.4em 0;
  padding: 0;
  border: 3px solid rgb(0, 118, 16);
  border-radius: 50%;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  flex-grow: 1;
}

.title a {
  margin-left: 1em;
  text-align: left;
  font-size: 1.5em;
}
.tab {
  margin: auto 4px;
  font-weight: bold;
}

.tab .router-link-active {
  background-color: white;
  color: black;
  border-radius: 4px;
}
</style>
