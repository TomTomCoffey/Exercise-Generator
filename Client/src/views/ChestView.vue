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
                
                  <li class="is-active"><a href="#" aria-current="page">Chest</a></li>
                </RouterLink>
                </ul>
              </nav>
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>The Chest</u></h1>
                <p class = "is-size-4">
                  The chest is on the front of the torso, located on
                  the upper part of the torso. The highlighted section
                  to the right demonstrates where the chest it found.
                </p>


              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/chestRed.png">


              </div>



            </div>
            <h1 class = "title has-text-centered">Arm Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/benchPress.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Bench Press</u></h1>
                <div>
                <p class = "is-size-4">
                  <strong><i>Bench Press:</i></strong>first start with laying down on a bench.
                  Start with barbell at your chest and push up into the air. Then bring it back
                  down onto your chest. Repeat this for the number of reps.
                </p>
              </div>
              </div>
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image">Flies</h1>
                <div>
                <p>
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  
                </p>
              </div>
            </div>

              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/flies.gif">
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
</style>
