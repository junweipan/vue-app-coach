import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/baseUI/BaseCard.vue'
import BaseButton from './components/baseUI/BaseButton.vue'
import BaseBadge from './components/baseUI/BaseBadge.vue';
const app = createApp(App);

app.use(router);
app.use(store);

//base component
app.component('base-card', BaseCard);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);

app.mount('#app');

