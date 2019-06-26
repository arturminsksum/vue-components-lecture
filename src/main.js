import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';

import '@/styles/global.scss';
import router from './router';

window.vm = new Vue({
    delimiters: ['{{', '}}'],
    store,
    router,
    render: h => h(App),
}).$mount('#app');
