<script setup lang="ts">

</script>
<template>
   <body id = "grad3">
    <div class = "block pt-5"></div>
      <div class = "columns">
        <div class = "column is-three-fifths is-offset-one-fifth is narrow-mobile">
          <div class = "block pt-5"></div>
          <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li class="is-active"><a href="#" aria-current="page">About Us</a></li>
                </ul>
              </nav>
              <div class="box">
            <h1 class = "title has-text-centered">The Team</h1>
          </div>
            <div class = "box mb-3">
            <div class = "columns">
              <div class = "column is-half">

                <h2 class = "has-text-weight-bold is-size-4 has-text-black">Tom Coffey</h2>
                <p>
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                </p>

                <h2 class = "has-text-weight-bold is-size-4 has-text-black pt-4">Scott Klein</h2>
                <p>
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                </p>

                <h2 class = "has-text-weight-bold is-size-4 has-text-black pt-4">Brian Ordonez</h2>
                <p>
                  Junior at SUNY New Paltz, majoring in Computer Engineering. I'm 20 years old
                  who enjoys learning something new and challenging myself. I'm from 
                  Poughkeepsie, NY and I'm bilingual in English and Spanish. 
                </p>

                <h2 class = "has-text-weight-bold is-size-4 has-text-black pt-4">Jalen Feton</h2>
                <p>
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                  There will be words here, that everyone will be able to read.
                </p>
              </div>

              <div class = "column is-half">
                <img class = "roundImage" src = "../assets/images/team.jpg">

              </div>


            </div>
          </div>
        </div>
      </div>
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
    #grad3 
    {
      background-image: linear-gradient(to right, rgb(246, 255, 0) ,  rgb(255, 153, 0), rgba(246, 255, 0));
    }
    .roundImage
    {
      border-radius: 30px;
      border: 3px solid #000000; 
    }
</style>
