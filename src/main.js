import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyDj5skhinBVFsFhkPO-hJdVqCCNo3Yw5pE",
  authDomain: "monobox-5482f.firebaseapp.com",
  projectId: "monobox-5482f",
  storageBucket: "monobox-5482f.appspot.com",
  messagingSenderId: "994834559238",
  appId: "1:994834559238:web:f002d4468ff09cc24eee87",
  measurementId: "G-2D25527360"
}
firebase.initializeApp(config);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

export const db = firebase.firestore()
export const auth = firebase.auth()