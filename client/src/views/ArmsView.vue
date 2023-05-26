<script setup lang="ts">

</script>
<style>
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
                
                  <li class="is-active"><a href="#" aria-current="page">Arms</a></li>
                </RouterLink>
                </ul>
              </nav>
            
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>The Arms</u></h1>
             <div>
                <p class = "is-size-4">
                  The arms are one of the main muscle groups.
                  These are located in the upper region of your torso.
                </p>
              </div>


              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/armsRed.png">


              </div>



            </div>
            <h1 class = "title has-text-centered">Arm Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image">
                  <img src = "../assets/images/bicepCurl.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Bicep Curls</u></h1>
                <div>
                <p class = "is-size-4">
                  <strong><i>Bicep Curls:</i></strong> Choose any two weights you would like. Hold 
                  them like shown in the diagram to the left. Start the 
                  weights at your waist and bring them up to your shoulders.
                  Repeat this step for the number of reps given. 
                  
                </p>
              </div>
              </div>
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Hammer Curls</u></h1>
                <div>
                  <p class = "is-size-4">
                  <strong><i>Hammer Curls:</i></strong> Choose any two weights you would like. Hold 
                  them like shown in the diagram to the left. Start the 
                  weights at your waist and bring them up to your shoulders.
                  The weights should be held vertically instead of horizontally.
                  Repeat this step for the number of reps given. 
                  
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

</style>