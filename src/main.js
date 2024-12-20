import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';

import './assets/styles.css';
import './assets/tailwind.css';

const app = createApp(App);

app.use(router);
app.use(VueLazyload);

app.mount('#app');
