<script setup>
import MarkdownIt from "markdown-it";
import "prismjs/themes/prism-tomorrow.css";
const props = defineProps({
  content: {
    type: String,
    request: true,
    default: ""
  }
})
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
const rs = md.render(props.content);

</script>

<template>
  <div
      class="markdown"
      v-html="rs"
  >
  </div>
</template>
<style scoped>
@font-face {
  font-family: "LXGWWenKaiScreenR";
  src: url("@/assets/fonts/LXGWWenKaiScreenR.ttf") format("truetype");
}
/**
 * 自定义markdown内容的字体样式
 * 该样式使用了深度选择器>>>以穿透Vue组件的样式隔离
 * 设置了特定的字体系列以保证文本的视觉一致性
 */
:deep(*) {
  font-family: "LXGWWenKaiScreenR", "宋体";
}
/**
 * 自定义markdown中h1标签的样式
 *
 * 此样式旨在为markdown中的h1标签提供一致的视觉呈现，确保文本的清晰易读和美观
 * 它调整了字体家族、权重、字变体、字距、行高、字体大小、颜色和样式，以及块级元素的上下边距
 */
:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
  /* 设置文本颜色为特定的蓝色调，以增强可读性 */
  color: hsl(216, 88%, 26%);
  /* 设置字体样式为正常，避免斜体 */
  font-style: normal;
  /* 设置块级元素的上边距为1rem，以提供足够的空间 */
  margin-block-start: 1rem;
  /* 设置块级元素的下边距为1rem，与上边距保持一致 */
  margin-block-end: 1rem;
  /* 设置字体变体为正常，避免小写或大写 */
  font-variant: normal;
  /* 调整字距为稍紧，以改善文本的紧凑感 */
  letter-spacing: -0.015em;
  /* 设置行高为1.2，以提供适当的行间距 */
  line-height: 1.2;
  /* 设置字体权重为700，以加粗文本 */
  font-weight: 700;
  /* 给鼠标悬浮时显示的前缀编号提供定位元素 */
  position: relative;
}
/**
 * 设置markdown中h1至h6标题的字体大小
 * 每个级别的标题比上一级别缩小10%
 * 使用深度选择器>>>以穿透Vue组件的样式隔离
 */

:deep(h1) {
  /* 设置字体大小为1.5625em，以放大文本 */
  font-size: 1.5625em;
}

:deep(h2) {
  /* 字体大小为h1的90% */
  font-size: 1.4062em;
}

:deep(h3) {
  /* 字体大小为h2的90% */
  font-size: 1.2656em;
}

:deep(h4) {
  /* 字体大小为h3的90% */
  font-size: 1.139em;
}

:deep(h5) {
  /* 字体大小为h4的90% */
  font-size: 1.0251em;
}

:deep(h6) {
  /* 字体大小为h5的90% */
  font-size: 0.9226em;
}

/**
 * 为markdown中的标题元素添加hover效果和前缀编号
 * 当鼠标悬停在标题元素上时，会在元素左侧显示对应级别的编号
 * 使用CSS的:before伪元素和content属性来实现
 */
:deep(h1:hover:before),
:deep(h2:hover:before),
:deep(h3:hover:before),
:deep(h4:hover:before),
:deep(h5:hover:before),
:deep(h6:hover:before) {
  /* 设置边框、内边距、背景色、字体大小、位置等样式 */
  border: 1px solid hsl(216, 88%, 26%);
  padding: 2px;
  background-color: white;
  font-size: 0.5em;
  position: absolute;
  left: -32px;
}
/* 为不同级别的标题元素设置不同的content值 */
:deep(h1:hover:before) {
  content: "#1";
}
:deep(h2:hover:before) {
  content: "#2";
}
:deep(h3:hover:before) {
  content: "#3";
}
:deep(h4:hover:before) {
  content: "#4";
}
:deep(h5:hover:before) {
  content: "#5";
}
:deep(h6:hover:before) {
  content: "#6";
}

/**
 * 为markdown中的特定HTML标签定义样式
 *
 * 这些样式规则旨在定制markdown内容中某些HTML元素的外观
 * 使用Vue的深度选择器`>>>`以确保样式能够应用于markdown内容，而不会被markdown容器的样式覆盖
 */
:deep(strong) {
  /* 设置markdown中strong元素的颜色为orangered，字体权重为正常 */
  color: orangered;
  font-weight: normal;
}
:deep(em) {
  /* 设置markdown中em元素的颜色为深灰色 */
  color: #666;
}
:deep(em strong) {
  /* 对于markdown中同时包含em和strong的元素，应用特殊效果 */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* 使用线性渐变背景，从深蓝色到浅蓝色，增强视觉效果 */
  background-image: linear-gradient(120deg, #1048ff 0%, #14c8ff 80%);
}
:deep(a) {
  /* 设置markdown中a元素的颜色为蓝色，并添加下划线 */
  color: hsl(207, 77%, 54%);
}
:deep(p) {
  line-height: 1.8em;
  margin: 1em 0;
}
:deep(p code) {
  background-color: #cccccc62;
  border-radius: 4px;
  padding: 2px 4px;
  color: #54729f;
}
:deep(img) {
  /* 图片居中对齐 */
  display: block;
  width: 100%;
  padding: 1em 10%;
}
:deep(blockquote) {
  border-left: 4px solid #ccc; /* 左边框线 */
  padding: 10px 20px; /* 内边距 */
  margin: 10px 0; /* 外边距 */
  background-color: #f9f9f9; /* 背景颜色 */
  font-style: italic; /* 斜体文字 */
  color: #666; /* 文字颜色 */
}
:deep(ul) {
  /* 列表项标记样式 */
  list-style-type: disc;
  /* 内边距和外边距 */
  margin: 1em 0;
  padding-left: 1.5em;
  /* 字体样式 */
  color: #333;
  font-size: 1em;
  line-height: 1.5;
}

:deep(ul li) {
  /* 列表项内边距 */
  padding: 0.25em 0;
}

:deep(ol) {
  /* 列表项编号样式 */
  list-style-type: decimal;
  /* 内边距和外边距 */
  margin: 1em 0;
  padding-left: 1.5em;
  /* 字体样式 */
  color: #333;
  font-size: 1em;
  line-height: 1.5;
}

:deep(ol li) {
  /* 列表项内边距 */
  padding: 0.25em 0;
}
</style>
