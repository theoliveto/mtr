import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@fontsource/ibm-plex-mono';
import '@fontsource-variable/ibm-plex-sans/wght.css';
import '@fontsource-variable/roboto-slab/wght.css';

createApp(App).use(store).use(router).mount('#app')
