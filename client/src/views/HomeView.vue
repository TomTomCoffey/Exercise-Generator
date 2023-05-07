<script setup lang="ts">
import LoginBadge from '@/components/LoginBadge.vue';
import { useSession, todaysWorkout,increment  } from '@/model/user';
import {getEasyWorkouts, type Workout} from '@/model/workout'
import { ref } from 'vue';
import { useRouter } from 'vue-router';




const router = useRouter();
const session = useSession();
const items = session.user?.workouts[session.user?.workoutPointer];

function finished(){

  increment();
  console.log(session.user?.workoutPointer);
  router.push('personal records');
}





</script>

<style>
  .box
  {
    box-shadow: 1px 1px 6px darkgray;
  }
  .navbar
  {
    background-color: white;
  }
  .navbar-divider-black
  {
    background-color: black;
  }
  .center 
  {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  #grad 
  {
     background-image: linear-gradient(to right, rgba(0, 255, 195, 0.199) ,  rgb(25, 255, 79), rgba(0, 255, 195, 0.245));
  }
  .img{
    width: 100px;
    height: 100px;
    object-fit: cover;

  }
</style>

<template>



<div v-if="session.user != null">
<body id = "grad">
  <div class = "block pt-5"></div>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth is-narrow-mobile">
      <div class="block pt-5"></div>
      <div class="box mb-3">
        <h1 class = "title">
           Hello, {{ session.user.name }}
           <div style = "position:relative; top:-38px;">
            <RouterLink to="/viewProfile">
          <button class="button is-success is-outlined is-pulled-right">View Profile</button>
            </RouterLink>
           </div>
        </h1>
      </div>
      <div class="box">
        <h1 class = "title is-size-4 has-text-centered">
          Today's Workout Routine
          <hr class="navbar-divider-black">
        </h1>
        <div class="columns">
          <div class="column is-narrow-mobile">
        <table class = "table container">
          <thead>
            <th class = "has-text-centered">Exercise Name</th>
            <th class = "has-text-centered">Picture</th>
            <th class = "has-text-centered">Number of Sets</th>
            <th class = "has-text-centered">Number of Reps</th>
            <th class = "has-text-centered">Weight in Pounds</th>
          </thead>
            <tbody>
              <tr v-for="item in items" :key="item?.id">
              <td class = "has-text-centered">{{ item?.name }}</td>
              <td>
                <figure>
                  <img :src="item?.photo" alt="User Photo" class="img"> <!-- This is where the image should go -->
              </figure>
            </td>
              <td class = "has-text-centered">{{ item?.sets }}</td>
              <td class = "has-text-centered">{{ item?.reps }}</td>
              <td class = "has-text-centered">{{item?.weight}}lbs</td>
            </tr>
          </tbody>
         
        </table>
          </div>
          </div>
          <button class="button is-fullwidth is-info is-outlined" id = "submission" type = "button" @click="finished()">Finished Workout</button>

        
      </div>
      <div class="box">
        <h1 class = "title is-size-4 has-text-centered">
          Today's Workout Input
          <hr class="navbar-divider-black">
        </h1>
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Type of Excersise</label>
              <div class="control">
                <input class="input" type="text" placeholder= "ex. Chest Press" id = "eT">
              </div>
            </div>
            <div class="field">
              <label class="label">Number of Sets</label>
              <div class="control">
                <input class="input" type="text" placeholder="ex. 4" id = "nS">
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <label class="label">Number of Reps</label>
              <div class="control">
                <input class="input" type="text" placeholder="ex. 15" id = "nR">
              </div>
            </div>
            <div class="field">
              <label class="label">Weight</label>
              <div class="control">
                <input class="input" type="text" placeholder="ex. 65" id = "wht">
              </div>
            </div>
          </div>
        </div>
        <button class="button is-fullwidth is-info is-outlined" id = "submission" type = "button">Submit</button>
      </div>
    </div>
  </div>
  <div class="block pt-2"></div>
</body>
</div>

<div v-else>
  <div class="h1"> Please login to view this page.</div>



  

</div>









</template>