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
                
                  <li class="is-active"><a href="#" aria-current="page">Back</a></li>
                </RouterLink>
                </ul>
              </nav>
            <div class = "box mb-3">
            <div class = "columns col">
              <div class = "column is-half">
                <h1 class = "title has-text-centered"><u>The Back</u></h1>
                <p class = "is-size-4">
                  The back is made up of 3 main muscles. The Lats, Rhomboids,
                  and the Trapezius. It is located on your backside and is shown
                  highlighted in red in the image to the right.
                </p>


              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered">Location</h1>
                <img src = "../assets/images/backRed.png">


              </div>
            </div>
            <h1 class = "title has-text-centered">Back Exercises</h1>
            <hr class="navbar-divider-black">
            <div class = "columns col">
              <div class = "column is-half">
                <figure class= "image is-3by4">
                  <img src = "../assets/images/latdown.gif">
                </figure>
              </div>

              <div class = "column is-half">
                <h1 class = "title has-text-centered image"><u>Pull Downs</u></h1>
                <div>
                <p class = is-size-4>
                  <strong><i>Pull Downs:</i></strong> There will be words here, that everyone will be able to read.
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
                <h1 class = "title has-text-centered image"><u>Cable Rows</u></h1>
                <div>
                <p class = "is-size-4">
                  <strong><i>Cable Rows:</i></strong> There will be words here, that everyone will be able to read.
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
                <figure class= "image is-3by4">
                  <img src = "../assets/images/cableRow.gif">
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