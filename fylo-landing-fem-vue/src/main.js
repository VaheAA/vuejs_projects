import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/global.css';
import i18n from './i18n';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();



createApp(App).use(i18n).mount('#app');
App.component("font-awesome-icon", FontAwesomeIcon);
