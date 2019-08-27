import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import yaml from 'js-yaml';
// current version 5.10
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import 'font-awesome/css/font-awesome.css' last version 4.7
import '@/assets/less/common.less';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fas, far, fab);


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.prototype.$Y = yaml;
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
