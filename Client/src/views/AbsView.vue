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
                
                  <li class="is-active"><a href="#" aria-current="page">Abs</a></li>
                </RouterLink>
                </ul>
              </nav>
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>The Abdominal</u></h1>
                <div>
                <p class = "is-size-4">
                  The abs are located on your torso towards the bottom.
                  The abdominal muscles are made up of two muscles, the obliques
                  and the abdominis. This muscle group can be seen to your right.
                </p>
              </div>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/absRed.png">
              </div>
            </div>

            <h1 class = "title has-text-centered">Abs Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/pushUp.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Push Ups</u></h1>
                <div>
                <p class = "is-size-4">
                  <strong><i>Push Ups:</i></strong> start with a plank position.
                  Then lift your body up using only your arms. This is known as
                  the starting position. You will then lower your body using your
                  arms until your elbows are creating a 90 degree angle. This is
                  the end position. This is one rep, repeat until desired number
                  or until failure.
                  
                </p>
              </div>
              </div>
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Crunches</u></h1>
                <div>
                  <p class = "is-size-4">
                  <strong><i>Crunches:</i></strong> start by laying down on your
                  back  
                  
                </p>
              </div>
            </div>

              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/hammerCurl.gif">
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