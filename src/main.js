import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import dateFilter from "./filters/date.filters.js"
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyATCaa5YBJWX0o02zKDHJk8-mRVOGmmLR0",
  authDomain: "crm-project-vue.firebaseapp.com",
  databaseURL: "https://crm-project-vue.firebaseio.com",
  projectId: "crm-project-vue",
  storageBucket: "crm-project-vue.appspot.com",
  messagingSenderId: "201938149169",
  appId: "1:201938149169:web:98a0c228ec1cb3994a1a10",
  measurementId: "G-QTSQP0SZ0M"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


