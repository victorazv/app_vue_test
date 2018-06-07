var firebase = require('firebase')

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC-tv2Jvl7FQs4ZOqCWKIwr1FsZTwEwqFU',
  authDomain: 'app-vue-test.firebaseapp.com',
  databaseURL: 'https://app-vue-test.firebaseio.com',
  projectId: 'app-vue-test',
  storageBucket: 'app-vue-test.appspot.com',
  messagingSenderId: '268404346453'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
