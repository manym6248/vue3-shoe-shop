import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import { createMetaManager } from 'vue-meta'
import bootstrap from 'bootstrap'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)





createApp(App)
.use(store)
.use(createMetaManager())
.use(router)
.component('font-awesome-icon', FontAwesomeIcon) 
.mount('#app')
