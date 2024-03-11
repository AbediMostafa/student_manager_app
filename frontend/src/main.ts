import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from "./router";
import ApiService from "./core/services/ApiService.ts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from "pinia";
ApiService.init();
const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app')
