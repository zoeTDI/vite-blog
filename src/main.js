import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import vSlideIn from "@/js/vSlideIn.js";

const app = createApp(App);
app.directive('side-in', vSlideIn);
app.use(router);
app.mount("#app");

