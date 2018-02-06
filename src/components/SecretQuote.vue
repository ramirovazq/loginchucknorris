  <!-- src/components/SecretQuote.vue -->

  <template>
    <div class="col-sm-6 col-sm-offset-3">
      <h1>Get a Secret Chuck Norris Quote!</h1>
      <button class="btn btn-warning" v-on:click="getQuote()">Get a Quote</button>
      <div class="quote-area" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>      
      </div>
    </div>
  </template>

  <script>
  import auth from '../auth'
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        /*
        this.$http
          .get('http://localhost:3001/api/protected/random-quote', (data) => {
            this.quote = data;
          }, {
            headers: auth.getAuthHeader()
          })
          .error((err) => console.log(err))
*/

        console.log(window.localStorage);

        console.log("--------------------");
        console.log(auth.user);
        this.$http.get('http://localhost:3001/api/protected/random-quote', {headers: auth.getAuthHeader()}).then(response=>{
          this.quote = response.body;
        }, response=>{
            console.log("error callback");
        });


      }
    },
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate() {
        return auth.user.authenticated
      }
    }
  }
  </script>