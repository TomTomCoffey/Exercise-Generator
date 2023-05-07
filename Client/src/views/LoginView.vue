<script setup lang="ts">

import { useSession, loginWithServer, type User, loginWithUser } from "../model/user";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const session = useSession();
const email = ref('');
const password = ref('');
console.log(session.user);  /// <---at this point it is undefined 

const user1 = ref<User | null>(null);

function login() {
    
    loginWithServer(email.value, password.value).then((user) => {

       // router.push('/');

        if(user.name === null || user === undefined){
            console.log("user is null");
            return;
        }
    else{
      
        router.push("/");
    }

       
    });
}




     
    

 </script>

 <template>
    <body id = "grad">
     <div class="box">

        <div class="form">
            
            <h1 class="title">Login</h1>
            <h2 class="subtitle">Please enter your credentials</h2>
            
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="email">
                </div>
            </div>
    
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
            </div>
            
            <button class="button is-info is-outlined is-success" @click="login">Login</button>
                
            <RouterLink to="/signUp">
              
              <button class = "button is-info is-outlined is-link ml-3">Sign Up</button>
           
          </RouterLink>
        

        </div>

     </div>
     </body>
 </template>


 <style scoped>

 .title{
     color: black;
     font-size: 3rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 1rem;
     text-align: center;
 }
 .subtitle{
     color: black;
     font-size: 1.5rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 5rem;
     text-align: center;
 }

 .form{
        margin: 0 auto;
        width: 50%;
        padding: 5rem;
        background-color: white;
        border-radius: 10px;
 }

 .box{
        background-color: transparent;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
 }
 #grad 
 {
        background-image: linear-gradient(to left, rgb(255, 139, 0) , rgb(2, 0, 198));
 }



 </style>