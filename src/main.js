import Vue from 'vue'
import App from 'components/App.vue'

import router from './router/index.js'
import auth from './auth'

auth.checkAuth();
/*
import SecretQuote from './componentes/SecretQuote.vue'
import SignUp from './componentes/SignUp.vue'
import Login from './componentes/Login.vue'
*/
//import VueRouter from 'vue-router';
//import VUeResource from 'vue-resource'

//Vue.use(VUeResource)
//Vue.use(VueRouter)


//var router = new VueRouter({
  // mode: 'history',
  //routes: [
  /*  {
      path: '/home',
      name: "home",
      component: Home
    },
    */
  //  {
    //  path: '*',
    //  redirect: '/home'
   // }
//  ]
// });


new Vue({
  el: '#app',
  router: router,  
  render: h => h(App)
})
