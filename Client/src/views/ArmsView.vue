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
                  <li><a href="#">Show All</a></li>
                  <li class="is-active"><a href="#" aria-current="page">Arms</a></li>
                </RouterLink>
                </ul>
              </nav>
            
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered">The Arms</h1>
             <div>
                <p>
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
                <h1 class = "title has-text-centered image">Bicep Curls</h1>
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
            </div>

            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered image">Hammer Curls</h1>
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
                  <img src = "../assets/images/hammerCurl.gif">
                </figure>
              </div>
              </div>
            







          </div>
        </div>
      </div>
      
      
</body>
</template>



<style scoped>

</style>