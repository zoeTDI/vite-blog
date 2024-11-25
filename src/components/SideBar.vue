<script setup>
import data from "../../public/data.json";
import avatarSrc from "@/assets/logo.png";
import weChatCode from "@/assets/weChatCode.png";
import MusicCard from "@/components/MusicCard.vue";

const userName = "Caldm";
const summary = "这里是我的个人博客，欢迎来到我的小站，希望你喜欢。";
const announcement = "欢迎来访 Caldm 的个人博客，博主暂时还没有发布任何公告。";
const qqId = "1832400547";
const email = "1832400547@qq.com";
const categories = data.map(e => e.category);
const tags = Array.from(new Set(data.flatMap(item => item.tags)));

/**
 * 复制QQ号到剪贴板
 */
function copyQQId() {
  try {
    // 将qqId变量的值写入剪贴板
    navigator.clipboard.writeText(qqId);
  } catch (e) {
    // 捕获复制过程中的异常，并在控制台输出错误信息
    console.error("复制到剪贴板失败：", e);
    // 复制失败时，弹窗提示用户手动复制
    alert(`复制到剪贴板失败，轻手动复制 ${qqId}`)
  }
}

/**
 * 复制邮箱到剪贴板
 */
function copyEmail() {
  try {
    // 将email变量的值写入剪贴板
    navigator.clipboard.writeText(email);
  } catch (e) {
    // 捕获复制过程中的异常，并在控制台输出错误信息
    console.error("复制到剪贴板失败：", e);
    // 复制失败时，弹窗提示用户手动复制
    alert(`复制到剪贴板失败，轻手动复制 ${email}`)
  }
}
</script>

<template>
  <div id="sidebar">
    <div id="header">
      <div id="header-image">
        <router-link to="/">
          <img
              :src="avatarSrc"
              alt="头像"
          >
        </router-link>
      </div>
      <div id="info">
        <h1>
          <router-link to="/">{{ userName }}</router-link>
        </h1>
        <h2>{{ summary }}</h2>
        <div class="connect">
          <button
              @click.prevent
              id="weChat"
          >
            <svg
                class="icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M693.12 347.264c11.776 0 23.36 0.896 35.008 2.176-31.36-146.048-187.456-254.528-365.696-254.528C163.2 94.912 0 230.656 0 403.136c0 99.52 54.272 181.248 145.024 244.736L108.8 756.864l126.72-63.488c45.312 8.896 81.664 18.112 126.912 18.112 11.392 0 22.656-0.512 33.792-1.344-7.04-24.256-11.2-49.6-11.2-76.032C385.088 475.776 521.024 347.264 693.12 347.264zM498.304 249.024c27.392 0 45.376 17.984 45.376 45.248 0 27.136-17.984 45.312-45.376 45.312-27.072 0-54.336-18.176-54.336-45.312C443.968 266.944 471.168 249.024 498.304 249.024zM244.672 339.584c-27.2 0-54.592-18.176-54.592-45.312 0-27.264 27.392-45.248 54.592-45.248S289.92 266.944 289.92 294.272C289.92 321.408 271.872 339.584 244.672 339.584zM1024 629.76c0-144.896-145.024-262.976-307.904-262.976-172.48 0-308.224 118.144-308.224 262.976 0 145.28 135.808 262.976 308.224 262.976 36.096 0 72.512-9.024 108.736-18.112l99.392 54.528-27.264-90.624C969.728 783.872 1024 711.488 1024 629.76zM616.128 584.384c-17.984 0-36.224-17.92-36.224-36.224 0-18.048 18.24-36.224 36.224-36.224 27.52 0 45.376 18.176 45.376 36.224C661.504 566.464 643.648 584.384 616.128 584.384zM815.488 584.384c-17.856 0-36.032-17.92-36.032-36.224 0-18.048 18.112-36.224 36.032-36.224 27.264 0 45.376 18.176 45.376 36.224C860.864 566.464 842.752 584.384 815.488 584.384z"
                  fill="#272636"
              ></path>
            </svg>
            <div class="code">
              <img
                  :src="weChatCode"
                  alt="二维码"
              >
            </div>
          </button>
          <button
              @click="copyQQId"
              id="QQ"
          >
            <svg
                class="icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
              ></path>
            </svg>
          </button>
          <button
              @click="copyEmail"
              id="emali"
          >
            <svg
                class="icon"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M1022.08 716.928V300.48l-217.28 217.344 217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68l-249.536-228.608-117.12 117.12"
                  fill="#000000"
              ></path>
              <path
                  d="M932.928 128h-819.2C63.616 128 22.848 168.832 22.848 219.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008C1024 168.832 983.04 128 932.928 128M20.864 300.48v417.6L238.72 518.4 20.864 300.48"
                  fill="#000000"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <MusicCard  class="card music"/>
    <div class="card announcement">
      <div class="card-header">
        <div class="card-icon">
          <svg class="icon"
               viewBox="0 0 1026 1024"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M115.479782 1024A115.536809 115.536809 0 0 1 0 908.520218V335.284284a115.479782 115.479782 0 0 1 115.536809-115.479782H280.5731L489.805356 10.686299a34.216232 34.216232 0 0 1 7.014328-5.702705 35.470827 35.470827 0 0 1 32.790555-1.710811l1.596758 0.741351 2.566217 1.482704 0.627297 0.399189a38.436234 38.436234 0 0 1 3.991894 3.079461l1.425676 1.311622 209.17523 209.118203h161.899803A115.479782 115.479782 0 0 1 1026.48695 335.284284v573.12188a115.479782 115.479782 0 0 1-115.479782 115.479782z m-41.059478-681.758416v555.899711a50.297861 50.297861 0 0 0 50.354887 50.29786H902.738245a50.297861 50.297861 0 0 0 50.297861-50.29786V342.241584a50.297861 50.297861 0 0 0-50.297861-50.29786H821.18956l50.012725 50.012725a35.470827 35.470827 0 0 1-50.126779 50.126779l-100.139505-100.139504H308.687437L208.547932 392.083228a35.470827 35.470827 0 0 1-50.126779-50.126779l50.012725-50.012725H124.832219a50.297861 50.297861 0 0 0-50.411915 50.29786z m306.349327-122.380055h268.027148L514.783205 85.904982zM263.636065 797.716655a29.254878 29.254878 0 1 1 0-57.027053h499.499955a29.254878 29.254878 0 1 1 0 57.027053z m0-228.108211a29.254878 29.254878 0 1 1 0-57.027053h499.499955a29.254878 29.254878 0 1 1 0 57.027053z"
                fill="#666666">
            </path>
          </svg>
        </div>
        <div class="card-title">
          <span>公告</span>
        </div>
      </div>
      <div class="card-content">
        <p>{{ announcement }}</p>
      </div>
    </div>
    <div class="card categories">
      <div class="card-header">
        <div class="card-icon">
          <svg
              class="icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M164.3 206.4c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM353.2 300.4h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40zM164.3 459.2c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 473.2h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40zM164.3 712c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 726h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40z"
                fill=""
            ></path>
          </svg>
        </div>
        <div class="card-title">
          <span><router-link
              :to="{name: 'Archivist', params: {cate: 'all'}}">分类</router-link></span>
        </div>
      </div>
      <div class="card-content">
        <ul>
          <li
              v-for="(item, index) in categories.filter((value, index, self) => self.indexOf(value) === index)"
              :key="index"
          >
            <router-link :to="{name: 'Archivist', params: {cate: item}}">
              {{ item }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="card tags">
      <div class="card-header">
        <div class="card-icon">
          <svg
              class="icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M960.616994 0.010005H519.790222c-9.825277 0-20.481001 4.642494-27.854961 12.016455L10.676772 494.095383l-1.090586 0.550296c-15.018066 15.018066-15.018066 39.331125 0 54.079046l439.736187 439.736187 0.550295 0.82044c14.747921 15.018066 39.331125 15.018066 54.349192 0l482.609214-482.619219c7.654111-7.644106 12.016454-17.209243 12.016454-27.854961V38.52069c0-21.311447-16.929093-38.510684-38.230534-38.510685z m-38.78083 462.948654L477.177334 907.61749l-386.207436-385.65714L536.179024 76.761229h385.65714v386.19743zM756.867558 357.532034c63.093888 0 114.981758-51.897875 114.981758-115.261908 0-63.364033-51.897875-115.261908-114.981758-115.261909-63.364033 0-115.271914 51.347579-115.271913 115.261909 0 63.374039 51.90788 115.261908 115.271913 115.261908z m0-184.088876a68.716908 68.716908 0 0 1 68.826968 68.826968c0 37.960389-31.136724 69.377263-68.826968 69.377263-38.240539 0-69.377263-31.416874-69.377263-69.377263 0-38.230534 31.136724-68.826968 69.377263-68.826968z"
                fill="#717071"
            ></path>
          </svg>
        </div>
        <div class="card-title">
          <span><router-link
              :to="{name: 'Archivist', params: {cate: 'all'}}">标签</router-link></span>
        </div>
      </div>
      <div class="card-content">
        <ul>
          <li
              v-for="(item, index) in tags"
              :key="index"
          >
            <router-link :to="{name: 'Archivist', params: {cate: item}}">
              {{ item }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  /* 清除文本样式 */
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1em;
}

a {
  color: black;
  text-decoration: none;
}

.card {
  margin: 1em 0;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  border-radius: 15px;
  box-shadow: 0 0 5px #cbcbcb;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.card ul {
  list-style-type: none;
}

.card li {
  margin: 0.4em 0 0.4em 0.8em;
  padding: 0.2em 0 0.2em 0.4em;
}

.card li:hover {
  background-color: #f5f5f5;
}

#header:hover,
.card:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.card-icon {
  height: 24px;
  width: 24px;
  flex: 0 0 auto;
  margin: 0.6em 0.4em 0.6em 1em;
  padding: 0;
  overflow: hidden;
}

.card-icon svg {
  object-fit: cover;
}

.card-title {
  flex: 1 1 auto;
  margin: 0 0.5em 0 0;
  font-size: 1.2em;
}

.card-content {
  padding: 0.5em;
  margin-bottom: 0.5em;
}

.card-content p {
  text-indent: 2em;
}

#sidebar {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-items: center;
}

#header {
  margin: .5em 0;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #eceef0;
  box-shadow: 0 0 5px #cbcbcb;
  border-radius: 15px;
  text-align: center;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

#header-image {
  margin: 1.5em auto 0.5em;
  max-width: 100px;
  border: 5px solid #eaeaea;
  border-radius: 50%;
  overflow: hidden;
}

#header-image img {
  object-fit: cover;
  width: 100%;
}

#info h1 {
  margin: 1em 3em 0.5em;
  padding-bottom: 0.5em;
  font-size: 1.3em;
  border-bottom: 1px solid black;
}

#info h2 {
  display: block;
  margin: auto 1.8em 1.2em;
  font-size: 0.8em;
  font-weight: normal;
  line-height: 1.5em;
}

.connect {
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;
}

.connect button:hover {
  cursor: pointer;
}

#weChat .code {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  transition: width, height, opacity 0.3s ease;
}

#weChat .code img {
  width: 100%;
  object-fit: cover;
}

#weChat::before {
  content: "";
  position: absolute;
  left: -75px;
  height: 0;
  width: 0;
}

.connect #weChat:hover .code {
  width: 150px;
  height: 150px;
  opacity: 1;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  background-color: #eaeaea;
}

.connect button {
  border: none;
  background-color: transparent;
}

.connect button:hover {
  background-color: #f5f5f5;
}

.connect .icon {
  width: 80%;
  padding: 0.4em 1em;
}

</style>
