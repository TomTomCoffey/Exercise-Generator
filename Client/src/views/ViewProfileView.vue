<script setup lang="ts">

import { useSession } from '@/model/user';

const session = useSession();

</script>
<template>
  <body id = "grad">
    <div class="block pt-5"></div>
    <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth is-narrow-mobile">
      <div class="block pt-5"></div>
      <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li class="is-active"><a href="#" aria-current="page">View Profile</a></li>
                </ul>
              </nav>
      <div class="box mb-3">
        <div class="columns">
        <div class = "column">
        <h1 class = "title has-text-left pt-6 mb-1 is-size-1">
         {{session?.user?.name}}
        </h1>
    </div>
    <div class = "column">
        <figure class="image is-128x128 is-pulled-right">
            <img class = "is-rounded" src="../assets/images/ppf.png">
          </figure>

    </div>
  </div>
</div>
      <div class = "columns">
        <div class = "column">
          <div class="box">
            <h1 class = "title is-size-4 has-text-centered">
              Personal Information
              <hr class="navbar-divider-black">
            </h1>
              <table class = "table is-fullwidth is-hoverable is-striped">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{{ session?.user?.name }}</td>
                  </tr>
                  <tr>
                    <td>Level:</td>
                    <td>Beginner</td>
                  </tr>
                  <tr>
                    <td>Height:</td>
                    <td>{{ session.user?.height }} inches</td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td>{{ session.user?.weight }} lbs</td>
                  </tr>
                </tbody>
              </table>
              <button class="button is-fullwidth is-info is-outlined">Edit Info</button>
        </div>
      </div>
      <div class = "column">
        <div class="box">
          <h1 class = "title is-size-4 has-text-centered">
            Weekly Analytics
            <hr class="navbar-divider-black">
          </h1>
          <h2>Sessions</h2>
          <progress id = "pg1" class="progress is-success is-normal mb-1" value="3" max="5">60%</progress>
          <h2 class = "is-pulled-right">60%</h2>
          <h2 class = "pt-3">Workouts</h2>
          <progress class="progress is-success is-normal mb-1" value="8" max="25">32%</progress>
          <h2 class = "is-pulled-right">32%</h2>
          
          <table class = "table is-fullwidth is-hoverable is-striped">
            <tbody>
              <tr>
                <td># Workout Sessions:</td>
                <td class = "has-text-centered">{{ session.user?.totalWorkouts }}</td>
                <td class = "has-text-centered">/ 5</td>
              </tr>
              <tr>
                <td># Workouts:</td>
                <td class = "has-text-centered">{{ session.user?.totalWorkout }}</td>
                <td class = "has-text-centered">/ 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div class="block pt-2"></div>
  </body>
</template>

<style>
 body
    {
        background-color: rgba(0, 149, 255, 0.167);
    }
    .box
    {
        box-shadow: 1px 1px 6px darkgray;
    }
    #grad 
    {
       background-image: linear-gradient(to right, rgba(0, 255, 195, 0.199) ,  rgb(25, 255, 79), rgba(0, 255, 195, 0.245));
    }
</style>
