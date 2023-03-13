import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import { createStore } from 'vuex'
import App from './App.vue'

import './assets/main.css';
// import routes
import index from './components/project/caclulator/index.vue'
import home from './components/Router/home.vue'
import dashboard from './components/Router/dashboard.vue'
import danhsach from './components/Router/todolist/danhsach.vue'

// UI component
import Antd from 'ant-design-vue';

const routes = [
    { path: '/', component: index },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done);
    }
  }
})

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(store);
app.mount('#app');

