import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
Vue.prototype.$ajax = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
