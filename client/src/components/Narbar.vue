<script setup lang="ts">
import AboutView from '@/views/AboutView.vue';
import { RouterLink } from 'vue-router';





</script>


<template>
    <div>




       
  <nav class = "navbar has-shadow is-fixed-top">                                          <!-- This Starts the Navigation Bar-->
    
    <div class = "navbar-brand">                                      <!-- Navigation Bar Logo-->            
      <a href="https://www.newpaltz.edu/" class="navbar-item">        
        <img src = "pics/download.png" style = "max-height: 70px" class = "py-2 px-2"> 
      </a>
    </div>                                                             <!-- Navigation Bar Logo End--> 
    <div class = "navbar-menu">                                        <!-- Navigation Bar Menu--> 

      <div class = "navbar-start">                                      <!-- Left Side NavBar--> 
       <a class = "navbar-item"></a>
        <div class = "navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Workouts</a>
          <div class = "navbar-dropdown">
            <RouterLink to="/arms" class="navbar-item">Arms</RouterLink>
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <a class = "navbar-item" href = "chest.html">Chest</a>
            <a class = "navbar-item" href = "back.html">Back</a>
            <a class = "navbar-item" href = "shoulders.html">Shoulders</a>
            <a class = "navbar-item" href = "cardio.html">Cardio</a>
            <hr class="navbar-divider">
            <a class="navbar-item">Show All</a>
          </div>
        </div>
       <a class = "navbar-item" href = "personal-record.html">Personal Records</a>
      </div>

      <div class = navbar-end>                                          <!-- Right Side NavBar-->
        <a class = navbar-item><button class="button is-info is-outlined">Settings</button></a>
        <a class = navbar-item><button class="button is-danger is-outlined">Logout</button></a>
      </div>
    </div>                                                          <!-- Navigation Bar Menu End--> 
  </nav>  







    </div>
</template>



<style scoped>

</style>