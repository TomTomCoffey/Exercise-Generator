<script setup lang="ts">
import { RouterLink } from 'vue-router';






</script>


<template>
    <div>




       
  <nav class = "navbar has-shadow is-fixed-top">                                          <!-- This Starts the Navigation Bar-->
    
    <div class = "navbar-brand">                                      <!-- Navigation Bar Logo-->            
      <a href="https://www.newpaltz.edu/" class="navbar-item">        
        <img src = "../assets/images/download.png" style = "max-height: 70px" class = "py-2 px-2"> 
      </a>
    </div>                                                             <!-- Navigation Bar Logo End--> 
    <div class = "navbar-menu">                                        <!-- Navigation Bar Menu--> 

      <div class = "navbar-start">                                      <!-- Left Side NavBar--> 
       <a class = "navbar-item"></a>
       <div class="span">
              <div class="icon">
                <i class="fas fa-home"></i>
              </div>
            </div>
             <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <div class = "navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Workouts</a>
          <div class = "navbar-dropdown">
      
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <RouterLink to="/arms" class="navbar-item">Arms</RouterLink>
            <RouterLink to="/chest" class="navbar-item">Chest</RouterLink>
            <RouterLink to="/back" class="navbar-item">Back</RouterLink>
            <RouterLink to="/shoulders" class="navbar-item">Shoulders</RouterLink>
            <RouterLink to="/cardio" class="navbar-item">Cardio</RouterLink>
            <hr class="navbar-divider">
            <a class="navbar-item">Show All</a>
          </div>
        </div>
        <RouterLink to="/personal records" class="navbar-item">Personal Records</RouterLink>
      </div>

      <div class = navbar-end>                                          <!-- Right Side NavBar-->
        <a class = navbar-item><button class="button is-info is-outlined">Settings</button></a>
        <RouterLink to="/login" class="navbar-item">Logout</RouterLink>
      </div>
    </div>                                                          <!-- Navigation Bar Menu End--> 
  </nav>  







    </div>
</template>



<style scoped>

</style>