<script setup lang="ts">
import LoginBadge from '@/components/LoginBadge.vue';
import { useSession, login } from '@/model/user';
import { useRouter } from 'vue-router';


const session = useSession();

</script>

<style>
  .footer
  {
    background-color: orange;
  }
  body
  {
    background-color: rgba(0, 149, 255, 0.167);
  }
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
          <button class="button is-success is-outlined is-pulled-right">View Profile</button>
        </h1>
      </div>
      <div class="box">
        <h1 class = "title is-size-4 has-text-centered">
          Today's Workout Routine
          <hr class="navbar-divider-black">
        </h1>
        <div class="columns">
          <div class="column is-narrow-mobile">
        <table class = "table is-fullwidth is-hoverable">
          <thead>
            <th class = "has-text-centered">Excersise Name</th>
            <th class = "has-text-centered">Picture</th>
            <th class = "has-text-centered">Number of Sets</th>
            <th class = "has-text-centered">Number of Reps</th>
            <th class = "has-text-centered">Weight in Pounds</th>
          </thead>
          <tbody>
            <tr>
              <td class = "has-text-centered">Leg Extensions</td>
              <td>
                <figure>
                <img  class = "center" src="../assets/images/LegExtension.png">
              </figure>
            </td>
              <td class = "has-text-centered">4</td>
              <td class = "has-text-centered">10</td>
              <td class = "has-text-centered">60 lb</td>
            </tr>
            <tr>
              <td class = "has-text-centered">Calf Extensions</td>
              <td>
                <figure>
                <img class = "center" src="../assets/images/CalfExtensions.jpg">
              </figure>
            </td>
              <td class = "has-text-centered">3</td>
              <td class = "has-text-centered">15</td>
              <td class = "has-text-centered">50 lb</td>
            </tr>
            <tr>
              <td class = "has-text-centered">Seated Curls</td>
              <td>
                <figure>
                <img class = "center" src="../assets/images/SeatedCurl.png">
              </figure>
            </td>
              <td class = "has-text-centered">5</td>
              <td class = "has-text-centered">8</td>
              <td class = "has-text-centered">65 lb</td>
            </tr>
          </tbody>
          </table>
          </div>
          </div>
        
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
      <div class="box">
        <h1 class = "title is-size-4 has-text-centered">
          Previous Workouts
          <hr class="navbar-divider-black">
        </h1>
        <div class="columns">
          <div class="column">
            <h2 class = "is-size-5 has-text-weight-medium has-text-centered">MONDAY</h2>
            <table class = "table is-fullwidth is-hoverable is-striped">
              <thead>
                <th>Name</th>
                <th class = "has-text-centered">Sets</th>
                <th class = "has-text-centered">Reps</th>
                <th class = "has-text-centered">Weight</th>
              </thead>
    
              <tbody>
                <tr>
                  <td id = "out1" placeholder = "Name of Ex"></td>
                  <td class = "has-text-centered output" id = "out2" placeholder = "# Set"></td>
                  <td class = "has-text-centered output" id = "out3" placeholder = "# Rep"></td>
                  <td class = "has-text-centered output" id = "out4" placeholder = "pounds"></td>
                </tr>
                <tr>
                  <td>Leg Press</td>
                  <td class = "has-text-centered">3</td>
                  <td class = "has-text-centered">15</td>
                  <td class = "has-text-centered">80</td>
                </tr>
                <tr>
                  <td>Shoulder Press</td>
                  <td class = "has-text-centered">5</td>
                  <td class = "has-text-centered">8</td>
                  <td class = "has-text-centered">70</td>
                </tr>
              </tbody>
    
            </table>
          </div>
          <div class="column">
            <h2 class = "is-size-5 has-text-weight-medium has-text-centered">TUESDAY</h2>
            <table class = "table is-fullwidth is-hoverable is-striped">
              <thead>
                <th>Name</th>
                <th class = "has-text-centered">Sets</th>
                <th class = "has-text-centered">Reps</th>
                <th class = "has-text-centered">Weight</th>
              </thead>
    
              <tbody>
                <tr>
                  <td>Pull Downs</td>
                  <td class = "has-text-centered">4</td>
                  <td class = "has-text-centered">10</td>
                  <td class = "has-text-centered">30</td>
                </tr>
                <tr>
                  <td>Leg Press</td>
                  <td class = "has-text-centered">3</td>
                  <td class = "has-text-centered">15</td>
                  <td class = "has-text-centered">90</td>
                </tr>
                <tr>
                  <td>Shoulder Press</td>
                  <td class = "has-text-centered">5</td>
                  <td class = "has-text-centered">8</td>
                  <td class = "has-text-centered">45</td>
                </tr>
              </tbody>
    
            </table>
          </div>          
        </div>
      </div>
    </div>
  </div>
</body>
</div>

<div v-else>

  <LoginBadge></LoginBadge>

</div>









</template>