import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


import './lib/mui/dist/css/mui.min.css'

import './lib/mui/dist/css/icons-extra.css'

import app from './app.vue'

import router from './router.js'

var vm = new Vue({
	el:'#app',
	render:c => c(app),//这个c是es6的语法  随便写 但是app对应的是app.vue文件
	router
})