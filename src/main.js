// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

var VueFire = require('vuefire')
var firebase = require('firebase')

// explicit installation required in module environments
Vue.use(VueFire)

Vue.use(Vuetify)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyC-tv2Jvl7FQs4ZOqCWKIwr1FsZTwEwqFU',
  authDomain: 'app-vue-test.firebaseapp.com',
  databaseURL: 'https://app-vue-test.firebaseio.com',
  projectId: 'app-vue-test',
  storageBucket: 'app-vue-test.appspot.com',
  messagingSenderId: '268404346453'
}

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

let loginRef = db.ref('login')
console.log(loginRef)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    // simple syntax, bind as an array by default
    anArray: db.ref('login'),
    // can also bind to a query
    // anArray: db.ref('url/to/my/collection').limitToLast(25)
    // full syntax
    anObject: {
      source: db.ref('login'),
      // optionally bind as an object
      asObject: true,
      // optionally provide the cancelCallback
      cancelCallback: function () {},
      // this is called once the data has been retrieved from firebase
      readyCallback: function () {}
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
