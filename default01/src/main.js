// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import {CellGroup,Cell,Tabbar,TabbarItem,Stepper,PullRefresh,Tab,Tabs, Button,Row,Col,Swipe, SwipeItem,Lazyload,List,Field,NavBar} from 'vant'
Vue.use(CellGroup).use(Cell).use(Tabbar).use(TabbarItem).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tabs).use(Tab).use(PullRefresh).use(Stepper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  components: { App },
  template: '<App/>'
})
