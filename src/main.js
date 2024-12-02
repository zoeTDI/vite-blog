import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import SideIn from './js/SideIn.js'

const app = createApp(App);
app.use(router);
app.directive('side-in', SideIn);
app.mount("#app");

