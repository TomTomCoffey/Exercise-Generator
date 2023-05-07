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
                
                  <li class="is-active"><a href="#" aria-current="page">Shoulders</a></li>
                </RouterLink>
                </ul>
              </nav>
         
                <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>Shoulders</u></h1>
                <p class = "is-size-4">
                  Shoulders are a major muscle group in the upper body. 
                  They consist of three heads, the anterior deltoid, the medial deltoid, 
                  and the posterior deltoid, each playing a different role in shoulder movement.  
                </p>



              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/shouldersRed.png">


              </div>


            </div>
            <h1 class = "title has-text-centered">Shoulder Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/Shoulder-Press.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Shoulder Press</u></h1>
                <div>
                <p>
                  <strong><i>Shoulder Press:</i></strong> Raise your hands so that the dumbbells are 
                  resting at shoulder height with your palms facing out. Slowly raise the dumbbells upwards 
                  above your head before returning to the starting position. 
                </p>
              </div>
              </div>
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Lateral Raises</u></h1>
                <div>
                <p>
                  <strong><i>Lateral raises:</i></strong> Stand with your arms at your side, dumbbell in each
                  hand. Slowly raise both hands keeping your arms straight until your elbows are at shoulder height.
                  Lower both hands to the resting position.
                </p>
              </div>
            </div>

              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/lateral-raises.jpeg">
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