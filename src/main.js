import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
 


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App),
  // 在vue Create生命周期最初，给vue原型中添加一个工具人x,这个工具人是vue对象。通过x进行组件之间通信
  beforeCreate(){ //安装全局事件总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
