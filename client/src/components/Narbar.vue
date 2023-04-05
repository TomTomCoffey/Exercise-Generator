<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSession, logout } from '@/model/user';



const session = useSession();


</script>


<template>
    <div>




       
  <nav class = "navbar has-shadow is-fixed-top">                                          <!-- This Starts the Navigation Bar-->
    
    <div class = "navbar-brand">                                      <!-- Navigation Bar Logo-->            
      <a href="https://www.newpaltz.edu/" class="navbar-item">        
        <img src = "../assets/images/NPLogo.png" style = "max-height: 70px" class = "py-2 px-2"> 
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
            <RouterLink to="/settings" class="navbar-item">settings</RouterLink>
            <hr class="navbar-divider">
            <a class="navbar-item">Show All</a>
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

      <div class = navbar-end>                                          <!-- Right Side NavBar-->
        <a class = navbar-item><button class="button is-info is-outlined">Settings</button></a>
        <a class = navbar-item><button class="button is-danger is-outlined" @click="logout">Logout</button></a>
      </div>
    </div>                                                          <!-- Navigation Bar Menu End--> 
  </nav>  
    </div>

    
</template>



<style scoped>

</style>