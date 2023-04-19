import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createStore } from 'vuex'
import App from './App.vue'

import { createPinia } from 'pinia'

import './assets/main.css';
// import routes
import index from './components/project/caclulator/index.vue'

// UI component
import Antd from 'ant-design-vue';

import { setI18n } from './locale/setupI18n';

const routes = [
    { path: '/', component: index },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const app = createApp(App);
app.use(router);
app.use(Antd);

//// pinia
const pinia = createPinia();
app.use(pinia);

/// i18n
await setI18n(app);

app.mount('#app');