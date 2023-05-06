<script setup lang="ts">
import LoginBadge from '@/components/LoginBadge.vue';
import { useSession, getYesterdaysWorkout } from '@/model/user';
import type { Workout } from '@/model/workout';
import { ref } from 'vue';

const session = useSession();

const items = getYesterdaysWorkout();



</script>

<template>


  

<div v-if="session.user">
    <body id = "grad">
        <div class = "block pt-5"></div>
        <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class = "block pt-5"></div>
          <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
                <ul>
                  <RouterLink to = "/">
                  <li><a href="#">Home</a></li>
                
                  <li class="is-active"><a href="#" aria-current="page">Personal Records</a></li>
                </RouterLink>
                </ul>
              </nav>
           <div class="box mb-3">
                <h1 class = "title">
                    Personal Records
                </h1>
           </div>
           <div class="box">
            <table class = "table is-fullwidth">
                <thead>
                  <th class = "has-text-centered">Excersise Name</th>
                  <th class = "has-text-centered">Number of Sets</th>
                  <th class = "has-text-centered">Number of Reps</th>
                  <th class = "has-text-centered">Weight in Pounds</th>
                </thead>
                <tbody>

                  <tr v-for="item in items" :key="item.id">
                    <td class = "has-text-centered">{{ item.name  }}</td>
                    <td class = "has-text-centered">{{ item.sets }}</td>
                    <td class = "has-text-centered">{{ item.reps }}</td>
                    <td class = "has-text-centered">{{ item.weight }}lbs</td>
                  </tr>

               
                
               
                </tbody>
                </table>
           </div>
        </div>

      </div>
    </body>
    <div class="block pt-2"></div>
</div>

<div v-else>
  <LoginBadge/>
</div>
  

</template>

<style scoped>
    #grad 
    {
         background-image: linear-gradient(to right, rgba(0, 255, 195, 0.199) ,  rgb(25, 255, 79), rgba(0, 255, 195, 0.245));
    }
</style>