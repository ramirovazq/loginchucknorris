<template>
  <div class="container">
    Pagina principal


    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">

        <router-link tag="li" :to="{name: 'home'}" active-class="active" exact><a>Home</a></router-link>
        <router-link tag="li" :to="{name: 'secret.quote'}" active-class="active"><a>Secret Quote</a></router-link>
        <router-link tag="li" :to="{name: 'login'}" active-class="active"><a>Login</a></router-link>
        <router-link tag="li" :to="{name: 'signup'}" active-class="active"><a>Sign Up</a></router-link>
        <router-link tag="li" :to="{name: 'not.found'}" active-class="active"><a>404</a></router-link>
        <li><a href="" @click="logout()">Logout</a></li>
<!--
          <li><a v-link="'home'">Home</a></li>
          <li><a v-link="'login'" v-if="!user.authenticated">Login</a></li>
          <li><a v-link="'signup'" v-if="!user.authenticated">Sign Up</a></li>
          <li><a v-link="'secretquote'" v-if="user.authenticated">Secret Quote</a></li>
          <li><a v-link="'login'" v-if="user.authenticated" @click="logout()">Logout</a></li>
        -->
        </ul>
      </div>    
    </nav>


    <router-view></router-view>
  </div>

</template>


<script>
 import auth from '../auth'
  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>

