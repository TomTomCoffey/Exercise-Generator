<script setup lang="ts">
import LoginBadge from '@/components/LoginBadge.vue';
import { useSession } from '@/model/user';

const session = useSession();

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
                  <li><a href="#">Home</a></li>
                  <li class="is-active"><a href="#" aria-current="page">Personal Records</a></li>
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
                  <tr>
                    <td class = "has-text-centered">Leg Extensions</td>
                    <td class = "has-text-centered">4</td>
                    <td class = "has-text-centered">10</td>
                    <td class = "has-text-centered">60 lb</td>
                  </tr>
                  <tr>
                    <td class = "has-text-centered">Calf Extensions</td>
                    <td class = "has-text-centered">3</td>
                    <td class = "has-text-centered">15</td>
                    <td class = "has-text-centered">50 lb</td>
                  </tr>
                  <tr>
                    <td class = "has-text-centered">Seated Curls</td>
                    <td class = "has-text-centered">5</td>
                    <td class = "has-text-centered">8</td>
                    <td class = "has-text-centered">65 lb</td>
                  </tr>
                </tbody>
                </table>
           </div>
        </div>

      </div>
    </body>
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