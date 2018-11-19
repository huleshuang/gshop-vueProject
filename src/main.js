import Vue from 'vue'
import App from './App'
import router from './router/index'
import TopHeader from './components/TopHeader/HeaderTop'

import store from './store'

//注册全局组件
Vue.component('TopHeader', TopHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
