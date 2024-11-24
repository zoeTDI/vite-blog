<script setup>
// 有效音乐路径列表，用于验证音乐文件路径的有效性
import musicData from "../../public/music.json";
import {onMounted, onUnmounted, ref} from "vue";

const validPaths = musicData.map(e => e.path);
// 有效音乐名称列表，用于验证音乐名称的有效性
const validMusicNameList = musicData.map(e => e.name);
// 有效音乐封面路径列表，用于验证音乐封面路径的有效性
const validMusicCoverlist = musicData.map(e => e.cover);
// 音乐文件路径列表
const musicList = [
  "./傍晚，你和她一起逃掉了晚自习来到了岸边吹风.mp3",
  "./一千零一夜.mp3"
]
// 音乐名称列表
const musicNameList = [
  "all star （midwest emo cover)",
  "一千零一夜"
]
// 音乐封面图片路径列表
const musicCoverlist = [
  "./1731198840342.png",
  "./1731198849389.png"
]

// 当前音乐索引
const musicIndex = ref(0);

// 当前音乐文件路径
const musicSrc = ref(musicList[musicIndex.value]);

// 当前音乐名称
const musicName = ref(musicNameList[musicIndex.value]);

// 当前音乐封面路径
const musicCover = ref(musicCoverlist[musicIndex.value]);

// 音乐播放状态，初始为false
const isPlaying = ref(false);

// 验证音乐文件路径、名称和封面路径的有效性
if (!validPaths.includes(musicSrc.value) || !validMusicNameList.includes(musicName.value) || !validMusicCoverlist.includes(musicCover.value)) {
  throw new Error("Invalid music source path.")
}

// 创建Audio实例
const audio = new Audio();
audio.src = musicSrc.value;

// 当组件挂载时，添加事件监听器
onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
  audio.addEventListener('play', handlePlay);
  audio.addEventListener('pause', handlePause);
})

// 当组件卸载时，移除事件监听器
onUnmounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
  audio.removeEventListener('play', handlePlay);
  audio.removeEventListener('pause', handlePause);
})

/**
 * 处理页面可见性变化
 * 当页面变为隐藏状态时，暂停音乐播放；当页面重新可见时，如果音乐之前正在播放，则恢复播放
 */
function handleVisibilityChange() {
  if (document.visibilityState === 'hidden'){
    audio.pause();
  }else {
    if (isPlaying.value){
      audio.play();
    }
  }
}

/**
 * 处理音乐播放事件
 * 更新音乐播放状态，并在会话存储中记录
 */
function handlePlay() {
  isPlaying.value = true;
  sessionStorage.setItem('isPlaying', 'true');
}

/**
 * 处理音乐暂停事件
 * 更新音乐播放状态，并在会话存储中记录
 */
function handlePause() {
  isPlaying.value = false;
  sessionStorage.setItem('isPlaying', 'false');
}

/**
 * 切换音乐播放状态
 * 如果音乐正在播放，则暂停；否则，播放音乐
 */
function toggleMusic() {
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
}

/**
 * 播放下一首音乐
 * 暂停当前音乐，重置播放进度，更新音乐信息，并播放新音乐
 */
function nextMusic() {
  audio.pause();
  audio.currentTime = 0;
  musicIndex.value = (musicIndex.value + 1) % musicList.length;
  musicName.value = musicNameList[musicIndex.value];
  musicCover.value = musicCoverlist[musicIndex.value];
  musicSrc.value = musicList[musicIndex.value];
  audio.src = musicSrc.value;
  if (!isPlaying.value) {
    isPlaying.value = true;
  }
  audio.play()
}

/**
 * 播放上一首音乐
 * 暂停当前音乐，重置播放进度，更新音乐信息，并播放新音乐
 */
function lastMusic() {
  audio.pause();
  audio.currentTime = 0;
  musicIndex.value = (musicIndex.value - 1 + musicList.length) % musicList.length;
  musicName.value = musicNameList[musicIndex.value];
  musicCover.value = musicCoverlist[musicIndex.value];
  musicSrc.value = musicList[musicIndex.value];
  audio.src = musicSrc.value;
  if (!isPlaying.value) {
    isPlaying.value = true;
  }
  audio.play();
}

</script>

<template>
  <div>
    <div class="card-header">
      <div class="card-icon">
        <svg class="icon"
             viewBox="0 0 1024 1024"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M190.701808 898.510938c-71.119781 0-128.936581-48.255027-128.936581-107.495246 0-59.223846 57.8168-107.399055 128.936581-107.399055 71.103408 0 128.936581 48.175209 128.936581 107.399055C319.638389 850.25591 261.806239 898.510938 190.701808 898.510938L190.701808 898.510938zM190.701808 726.595496c-47.40773 0-85.957721 28.9084-85.957721 64.420195 0 35.55989 38.549991 64.516386 85.957721 64.516386s85.957721-28.956495 85.957721-64.516386C276.659529 755.503896 238.109538 726.595496 190.701808 726.595496L190.701808 726.595496zM749.426992 898.510938c-71.119781 0-128.936581-48.255027-128.936581-107.495246 0-59.223846 57.8168-107.399055 128.936581-107.399055 11.879562 0 21.441335 9.561773 21.441335 21.441335s-9.561773 21.537526-21.441335 21.537526c-47.40773 0-85.957721 28.9084-85.957721 64.420195 0 35.55989 38.549991 64.516386 85.957721 64.516386 42.387389 0 78.922491-23.760147 85.045955-55.274908 2.254344-11.67183 13.606903-19.235087 25.167193-17.012466 11.688203 2.254344 19.283182 13.527085 17.044188 25.198915C866.515734 860.56879 813.032636 898.510938 749.426992 898.510938L749.426992 898.510938zM919.295821 340.408947l-429.788603 0c-11.864212 0-21.457708-9.609869-21.457708-21.48943s9.593496-21.48943 21.457708-21.48943l429.788603 0c11.879562 0 21.521153 9.609869 21.521153 21.48943S931.176406 340.408947 919.295821 340.408947L919.295821 340.408947zM962.051601 214.542284l-83.894735 585.538877c-1.583055 10.744715-10.744715 18.515702-21.265326 18.515702-1.055029 0-2.030239-0.127913-3.086291-0.207731-11.768021-1.727341-19.891026-12.615319-18.21178-24.351618l83.703377-583.924099c-0.719384-23.088858-19.74674-41.636283-42.97886-41.636283l-429.788603 0c-36.295648 0-42.515303 40.900525-43.138496 45.585221l-83.959204 586.018807c-1.727341 11.799744-12.472056 20.018939-24.351618 18.307971-11.768021-1.727341-19.891026-12.615319-18.21178-24.351618l83.927481-585.603345c3.229554-28.285207 25.406646-82.935897 85.733617-82.935897l429.788603 0c47.40773 0 85.941348 38.566364 85.941348 85.957721C962.259332 212.495672 962.226586 213.535351 962.051601 214.542284L962.051601 214.542284z">
          </path>
        </svg>
      </div>
      <div class="card-title">
        <span>音乐</span>
      </div>
    </div>
    <div class="card-content music">
      <div class="music-player">
        <img
            :src="musicCover"
            alt="音乐专辑"
            class="album-cover"
            :class="{ 'rotate': isPlaying}"
            @click="toggleMusic"
        >
        <audio :src="musicSrc" id="musicPlayer" loop></audio>
      </div>
      <div class="music-info">
        <div class="music-title">
          <span :class="{'scrolling': isPlaying}">{{ musicName }}</span>
        </div>
        <div class="music-artist">
          <button @click="lastMusic(musicIndex)">
            <svg class="icon"
                 viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M98.31 483.06L654.05 162.2c22.43-12.95 50.47 3.24 50.47 29.14v641.71c0 25.9-28.04 42.09-50.47 29.14L98.31 541.34c-22.43-12.95-22.43-45.33 0-58.28z"
                  fill="#231815"></path>
              <path
                  d="M653.42 505.91L929.92 156c5.97-7.56 18.12-3.33 18.12 6.3v699.82c0 9.63-12.15 13.85-18.12 6.3L653.42 518.5a10.17 10.17 0 0 1 0-12.59z"
                  fill="#231815"></path>
            </svg>
          </button>
          <button v-show="!isPlaying" @click="toggleMusic">
            <svg class="icon" viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg" >
              <path
                  d="M844.704269 475.730473L222.284513 116.380385a43.342807 43.342807 0 0 0-65.025048 37.548353v718.692951a43.335582 43.335582 0 0 0 65.025048 37.541128l622.412531-359.342864a43.357257 43.357257 0 0 0 0.007225-75.08948z"
                  fill="" ></path>
            </svg>
          </button>
          <button v-show="isPlaying" @click="toggleMusic">
            <svg class="icon"
                 viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M116.053333 146.773333h184.746667v730.026667H116.053333zM723.2 146.773333h184.746667v730.026667h-184.746667z"
                  fill=""></path>
            </svg>
          </button>
          <button @click="nextMusic(musicIndex)">
            <svg class="icon"
                 viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M925.61 483.06L369.88 162.21c-22.43-12.95-50.47 3.24-50.47 29.14v641.71c0 25.9 28.04 42.09 50.47 29.14l555.74-320.86c22.43-12.95 22.43-45.33-0.01-58.28z"
                  fill="#231815"></path>
              <path
                  d="M370.5 505.91L94 156c-5.97-7.56-18.12-3.33-18.12 6.3v699.82c0 9.63 12.15 13.85 18.12 6.3L370.5 518.5c2.92-3.69 2.92-8.9 0-12.59z"
                  fill="#231815"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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


.music-player {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.album-cover {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #F5F5F5;
  box-shadow: 0 0 5px #9d9595;
  transition: transform 0.5s;
}

.album-cover img {
  width: 100%;
  object-fit: cover;
}

.album-cover.rotate {
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.card-content.music {
  display: flex;
  flex: 0;
}

.music-info {
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.music-artist {
  margin-top: 2.3em;
  display: flex;
  justify-content: space-evenly;
  gap: 4px;
}

.music-artist button {
  background-color: unset;
  margin: 4px;
  border: unset;
  width: 28px;
  height: 28px;
}

.music-artist button:active {
  transform: translateY(4px);
}

.music-artist svg {
  width: 100%;
  height: 100%;
}

.music-title > span {
  display: inline-block;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: max-content;
}

.music-title > span.scrolling {
  animation: slideText 5.5s linear infinite;
}

@keyframes slideText {
  0% {
    transform: translateX(0);
  }
  90.9% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>