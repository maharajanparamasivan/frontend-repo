import { createApp } from 'vue';
import router from './router';
import store from './store/index.js'
import App from './pages/App.vue';


const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
