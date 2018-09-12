// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import * as TWEEN from '@tweenjs/tween.js';
import VModal from 'vue-js-modal'
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.use(VModal, { dynamic: true })



import { TweenMax } from 'GSAP';




var nowSelect=2;
require("vue2-animate/dist/vue2-animate.min.css");

// import io from 'socket.io-client'
import VueSocketio from "vue-socket.io";
Vue.use(VueSocketio, "http://35.211.120.96");

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
window.eventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});


