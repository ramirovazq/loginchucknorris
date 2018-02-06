// src/auth/index.js

//import {router} from '../index'
import router from '../router/index.js'

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {

    // this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
    context.$http.post(LOGIN_URL, creds, {headers: {'Content-Type':'application/json'}}).then(response=>{

          localStorage.setItem('id_token', response.body.id_token)
          localStorage.setItem('access_token', response.body.access_token)
          console.log("RESPONSE.........")
          console.log(response);
          this.user.authenticated = true

          if(redirect) {
            //router.go(redirect)  
            router.replace(redirect);      
          }


        }, response=>{
            console.log("reboto el POST.........")
            console.log("error callback");
            console.log(response);
        });
/*
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      localStorage.setItem('access_token', data.access_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
    */
  },

  signup(context, creds, redirect) {

    let cabecera = {
                      headers: {
                                'Content-Type': 'application/json'
                              }
                    };
    console.log("**************** INI");
    console.log(creds);
    console.log("*************//");
    console.log(cabecera);
    console.log("**************** FIN");    
    context.$http.post(SIGNUP_URL, creds, cabecera).then(response=>{
          console.log("RESPONSE.........")


          console.log(response);

          localStorage.setItem('id_token', response.body.id_token)
          localStorage.setItem('access_token', response.body.access_token)

          this.user.authenticated = true

          if(redirect) {
            // router.go(redirect)        
          }

          console.log(window.localStorage);

        }, response=>{
            console.log("reboto el POST.........")
            console.log("error callback");
            console.log(response);
        });

    /*
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)
      localStorage.setItem('access_token', data.access_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
    */
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}