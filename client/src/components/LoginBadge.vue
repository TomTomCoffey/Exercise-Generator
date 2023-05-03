<script setup lang="ts">
import { ref } from 'vue';
import { useSession, loginWithServer, type User } from '../model/user';
import { useRouter } from 'vue-router';



const session = useSession();
const email = ref('');
const password = ref('');
console.log(session.user);  /// <---at this point it is undefined 
const user1 = ref<User | null>(null);
function login() {
    
    loginWithServer(email.value, password.value).then((user) => {
        if(user.name === null || user === undefined){
            console.log("user is null");
            return;
        }
    else{
        // console.log(user);
        // console.log('=========')
        // user1.value = user;
        // console.log(user);
        // console.log("=========")
        // session.user = user as User;
        // console.log(session.user);
        console.log(user);
        // console.log("=========")
        // console.log(user1.value);
        // console.log("=========")
        // console.log(user);
 
    }
       
    });
}

        


</script>


<template>
  <body id = "grad">
    <div>

        <div class = "columns">
    <div class  = "column is-half is-offset-one-quarter">
      <div class="block pt-5"></div>
      <div class="block pt-5"></div>
      <div class="block pt-5"></div>
     
        <form class="box">
          <h1 class="title has-text-centered">Log in and find your workout for today!</h1>
          <h2 class="subtitle has-text-centered">
            If you do not have an account please sign up.
          </h2>
            
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input name="email" class="input" type="email" placeholder="e.g. alex@example.com " v-model="email">
            </div>
          </div>
  
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input name="password" class="input" type="password" placeholder="********" v-model="password">
            </div>
          </div>

          <button class="button is-info is-outlined is-success" @click="login()">Log In</button>

          <RouterLink to="/signUp">
              
                <button class = "button is-info is-outlined is-link ml-3">Sign Up</button>
             
            </RouterLink>

          <label class="checkbox is-pulled-right">
          <input type="checkbox"> Remember me</label>
        </form>
  </div>
  </div>
  <div class="block pt-5"></div>
  <div class="block pt-5"></div>
  <div class="block pt-5"></div>





    </div>
  </body>
</template>



<style scoped>
      .body
          {
            background-color: rgba(0, 149, 255, 0.64);
          }
          .navbar
          {
            background-color: white;
          }
          .footer
          {
            background-color: rgb(255, 139, 0)
          }   
          .box
          {
            box-shadow: 1px 1px 6px darkgray;
          }
          #grad 
          {
            background-image: linear-gradient(to left, rgb(255, 139, 0) , rgb(2, 0, 198));
          }

</style>