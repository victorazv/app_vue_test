<template>
 <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="login" label="Login" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="realizarLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>
<script>

import {db} from '../firebase'

export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    var a = db.ref('login').on('child_added', snapshot => console.log(snapshot.val()))
    console.log(a)
    console.log(this.login)
  },
  methods: {
    realizarLogin () {
      console.log(this.login)
      // this.$router.push('/dashboard')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
