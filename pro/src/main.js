// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App'
import $ from 'n-zepto'
//导入vant

import router from './router'


import Axios from "axios"

import store from "./store"

Vue.use(Vant)
Vue.config.productionTip = false



import  './data/mock.js'





import './data/mock.js'
import './data/text.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})