<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSession, logout } from '../model/user';



const session = useSession();


</script>


<template>




       
  <nav class = "navbar has-shadow is-fixed-top">                                          <!-- This Starts the Navigation Bar-->
    
    <div class = "navbar-brand">                                      <!-- Navigation Bar Logo-->            
      <a href="https://www.newpaltz.edu/" class="navbar-item">        
        <img src = "../assets/images/NPFit Logo.png" style = "max-height: 70px" class = "py-2 px-2"> 
      </a>
    </div>                                                             <!-- Navigation Bar Logo End--> 
    <div class = "navbar-menu">                                        <!-- Navigation Bar Menu--> 

      <div class = "navbar-start">                                      <!-- Left Side NavBar--> 
             <RouterLink to="/" class="navbar-item"> 
              <div class="span">
                <div class="icon pr-3">
                  <i class="fa-solid fa-home"></i>
                </div>
              </div>
                Home
            </RouterLink>
            <RouterLink to="/about" class="navbar-item">
              <div class="span">
                <div class="icon pr-3">
                  <i class="fa-solid fa-info"></i>
                </div>
              </div>
              About

            </RouterLink>
        <div class = "navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <div class="span">
                <div class="icon pr-3">
                  <i class="fa-solid fa-dumbbell"></i>
                </div>
              </div>
            Workouts</a>
          <div class = "navbar-dropdown">
      
            <RouterLink to="/arms" class="navbar-item">Arms</RouterLink>
            <RouterLink to="/chest" class="navbar-item">Chest</RouterLink>
            <RouterLink to="/back" class="navbar-item">Back</RouterLink>
            <RouterLink to="/shoulders" class="navbar-item">Shoulders</RouterLink>
            <RouterLink to="/legs" class = "navbar-item">Legs</RouterLink>
            <RouterLink to="/abs" class = "navbar-item">Abs</RouterLink>
            <RouterLink to="/cardio" class="navbar-item">Cardio</RouterLink>
          </div>
        </div>
        
        <RouterLink to="/personal records" class="navbar-item">
          <div class="span">
                <div class="icon pr-3">
                  <i class="fa-solid fa-trophy"></i>
                </div>
              </div>  
          Personal Records
        </RouterLink>
    </div>

      <div v-if="session.user">
        <div class = "navbar-end">                                          <!-- Right Side NavBar-->
          <div style = "position:relative; top:15px;">
            <RouterLink to="/settings">
              <a class = "navbar-item">
                <button class="button is-info is-outlined">Settings</button>
              </a>
            </RouterLink>
            </div>
        
            <div style = "position:relative; top:15px;">
              <a class = "navbar-item">
                <button class="button is-danger is-outlined" @click="logout">Logout</button>
              </a>
            </div>
          
        </div>
      </div>
       <div v-else>
          <RouterLink to="/login">
            <div class = "navbar-end">                                          <!-- Right Side NavBar-->
              <div style = "position:relative; top:15px;">
                <a class = "navbar-item">
                  <button class="button is-info is-outlined">Login</button>
                </a>
              </div>
            </div>
          </RouterLink>

       </div>
    
    </div>                                                          <!-- Navigation Bar Menu End--> 
  </nav>  

    
</template>



<style scoped>


</style>