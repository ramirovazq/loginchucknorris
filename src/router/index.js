import Vue from 'vue'

import Router from 'vue-router'
import VUeResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

import Home from 'components/Home.vue'
import SecretQuote from 'components/SecretQuote.vue'
import Login from 'components/Login.vue'
import SignUp from 'components/SignUp.vue'

import NotFound from 'components/errors/NotFound.vue'


//import VueRouter from 'vue-router';



Vue.use(Router)
Vue.use(VUeResource)
Vue.use(BootstrapVue)


var router = new Router({
  // mode: 'history',
  routes: [
/*
    {
      path: '/',
      name: "inicio",
      component: Inicio
    },
*/    
    {
      path: '/',
      name: "home",
      component: Home
    },


    {
      path: '/secret-quote',
      name: "secret.quote",      
      component: SecretQuote,
      meta: { auth: true }
    },
        
    {
      path: '/login',
      name: "login",
      component: Login
    },    

    {
      path: '/signup',
      name: "signup",
      component: SignUp
    },    


    {
      path: '/404',
      name: "not.found",
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404'
    }    
  ]
});

export default router;