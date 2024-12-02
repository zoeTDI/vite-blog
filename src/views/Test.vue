<script setup>

// 定义背景颜色数组
const colors = [
  'rgb(195, 117, 117)',
  'rgb(155, 195, 117)',
  'rgb(117, 195, 195)',
  'rgb(195, 117, 195)',
  'rgb(195, 195, 117)',
  'rgb(117, 195, 195)',
  'rgb(195, 117, 195)',
  'rgb(117, 195, 195)'
];

</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">测试页</h2>
              <div
                  v-side-in
                  class="note"
                  v-for="(color, i) in colors"
                  :key="i"
                  :style="{backgroundColor: color}">
                <h2>{{ 'Card' + (i + 1) }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.note {
  display: flex;
  width: 800px;
  margin: 20px auto;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.note h2 {
  margin: auto;
  font-size: 3em;
  color: white;
}
</style>