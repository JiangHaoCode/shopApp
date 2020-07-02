import Vue from 'vue'
import App from './App'
import {myRequest} from './util/request.js';
import api from './common/vmeitime-http/index.js';


Vue.prototype.$myRequest = myRequest;

Vue.prototype.$api = api; //封装的 API请求

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
    ...App
})
app.$mount()
