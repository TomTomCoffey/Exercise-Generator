<script setup lang="ts">

</script>

<template>
     <body id = "grad2">
    <div class = "block pt-5"></div>
      <div class = "columns">
        <div class = "column is is-three-fifths is-offset-one-fifth is narrow-mobile">
          <div class = "block pt-5"></div>
          <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
                <ul>
                  <RouterLink to = "/">
                  <li><a href="#">Home</a></li>
                
                  <li class="is-active"><a href="#" aria-current="page">Cardio</a></li>
                </RouterLink>
                </ul>
              </nav>
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>Cardio</u></h1>
                <p class = "is-size-4">
                 Cardio is anything that gets your heart pumping and racing. Cardio
                 is associated with cardio vascular health and deals with your heart. 
                 Working out in your target heart rate is excellent for health, but 
                 don't stay there for too long.
                </p>


              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/heartRed.png">


              </div>



            </div>
            <h1 class = "title has-text-centered">Cardio Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/running.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Running</u></h1>
                <div>
                <p class = "is-size-4">
                  <strong><i>Running:</i></strong> Go out and go for a run. It doesn't
                  cost you anything. You can run on a treadmill at home or at your gym. 
                  You can also go hiking and run through the woods.
                </p>
              </div>
              </div>
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Jump Roping</u></h1>
                <div>
                  <p class = "is-size-4">
                  <strong><i>Jump Roping:</i></strong> Using a jump rope, swing it under
                  and over you and jump as comes close to your feet. There are multiple 
                  variations of jumps that can be made. There are also many kinds of games
                  that can be played with two people at once. 
                  
                </p>
              </div>
            </div>

              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/jump.gif">
                </figure>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div class="block pt-2"></div>
</body>
</template>



<style scoped>
    body
    {
        background-color: rgba(0, 149, 255, 0.167);
    }
    .box
    {
        box-shadow: 1px 1px 6px darkgray;
    }
    #grad2 
    {
        background-image: linear-gradient(to right, rgb(255, 102, 0) ,  rgb(255, 0, 0), rgba(255, 102, 0));
    }
    .col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>