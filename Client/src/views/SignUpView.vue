<script setup lang="ts">

</script>
<template>
   <body id = "grad">
    <div>

        <div class = "columns">
    <div class  = "column is-one-third is-offset-one-third">
      <div class="block pt-5"></div>
      <div class="block pt-5"></div>
      <div class="block pt-5"></div>
     
        <form class="box" action="login.php" method="POST">
          <h1 class="title has-text-centered">Create an Account</h1>
          <h2 class="subtitle has-text-centered">
            Get started with NPFit
          </h2>
            
          <div class="field">
            <label class="label">First Name</label>
            <div class="control">
              <input name="email" class="input" type="email" placeholder="e.g. John">
            </div>
          </div>

          <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
              <input name="email" class="input" type="email" placeholder="e.g. Smith">
            </div>
          </div>

<div class="columns">
      <div class = "column">
          <div class="field">
            <label class="label">Height (Feet)</label>
              <div class="control">
                 <div class="select is-small is-pulled-right is-fullwidth">
                     <select class = "is-hovered">
                        <option>--</option>
                        <option>4 ft</option>
                        <option>5 ft</option>
                        <option>6 ft</option>
                        <option>7 ft</option>
                        <option>8 ft</option>
                      </select>
                  </div>
               </div>
          </div>
      </div>

      <div class = "column">
          <div class="field">
            <label class="label">Height (Inches)</label>
              <div class="control">
                 <div class="select is-small is-pulled-right is-fullwidth">
                     <select class = "is-hovered">
                        <option>--</option>
                        <option>0 in</option>
                        <option>1 in</option>
                        <option>2 in</option>
                        <option>3 in</option>
                        <option>4 in</option>
                        <option>5 in</option>
                        <option>6 in</option>
                        <option>7 in</option>
                        <option>8 in</option>
                        <option>9 in</option>
                        <option>10 in</option>
                        <option>11 in</option>
                      </select>
                  </div>
               </div>
          </div>
      </div>
</div>

          <div class="field">
            <label class="label">Weight (lbs)</label>
            <div class="control">
              <input name="email" class="input" type="email" placeholder="e.g. 23">
            </div>
          </div>

          <div class = "field">
            <label class = "label">Selected Difficulty</label>
            <div class = "control">
                    <div class="select is-small is-pulled-right is-fullwidth">
                        <select class = "is-hovered">
                        <option>--</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        </select>
                    </div>
            </div>
          </div>
          <div class="block pt-4"></div>

          <div class="field">
            <label class="label">Create Username</label>
            <div class="control">
              <input name="password" class="input" type="password" placeholder="e.g. ealex@example.com">
            </div>
          </div>

          <div class="field">
            <label class="label">Create a Password
              <i class = "fa-solid fa-circle-info is-pulled-right tooltip">
                <span class = "tooltiptext">
                  Here, you can create a password!
                </span>
              </i>
            </label>
            
            <div class="control">
              <input name="password" class="input" type="password" placeholder="********">
            </div>
          </div>

          <button class="button is-info is-outlined is-link is-fullwidth">Sign Up</button>
          
        </form>
  </div>
  </div>
  <div class="block pt-5"></div>
  <div class="block pt-5"></div>
  <div class="block pt-5"></div>





    </div>
  </body>
</template>



<style scoped>
          .body
          {
            background-color: rgba(0, 149, 255, 0.64);
          }
          .navbar
          {
            background-color: white;
          }
          .footer
          {
            background-color: rgb(255, 139, 0)
          }   
          .box
          {
            box-shadow: 1px 1px 6px darkgray;
          }
          #grad 
          {
            background-image: linear-gradient(to left, rgb(255, 139, 0) , rgb(2, 0, 198));
          }
          .tooltip {
            position: relative;
            display: inline-block;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: rgb(0, 0, 0);
            color: #ffffff;
            text-align: center;
            border-radius: 5px;
            padding-left: 10px;
            padding-right: 10px; 
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 10px;

            /* Position the tooltip */
            position: absolute;
            z-index: 1;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
</style>