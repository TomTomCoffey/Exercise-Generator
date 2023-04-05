<script setup lang="ts">

</script>

<template>
    <body id = "grad">
        <div class = "block pt-5"></div>
        <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
           <div class="box mt-6 mb-3">
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
</template>

<style scoped>
    body
    {
        background-color: rgba(0, 149, 255,0.167);
    }
    #grad 
    {
         background-image: linear-gradient(to right, rgba(0, 255, 195, 0.199) ,  rgb(25, 255, 79), rgba(0, 255, 195, 0.245));
    }
</style>