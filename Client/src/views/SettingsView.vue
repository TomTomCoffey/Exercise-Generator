<script setup lang="ts">

import LoginBadge from '@/components/LoginBadge.vue';
import { useSession } from '@/model/user';

const session = useSession();

</script>
<template>
  <div v-if="session.user">
   <body id = "grad4">
    <div class = "block pt-5"></div>
      <div class = "columns">
        <div class = "column is-half is-offset-one-quarter is narrow-mobile">
          <div class = "block pt-5"></div>
            <div class = "box mb-3">
              <h1 class = "title has-text-centered">Settings</h1>
              <div class="column is-8 is-offset-2">
                  <div class="columns">
                    <div class="column">
                      <h1>Change Level</h1>
                      <br>
                      <h1>Remember Username</h1>
                      <br>
                      <h1>Weekly Personal Best</h1>
                      <br>
                      <h1>Auto Sign-In</h1>
                      <br>
                      <h1>Dark Mode</h1>
                    </div>
                  <div class="column">
                      <div class="select is-small is-pulled-right is-rounded">
                        <select>
                          <option>Select</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                      <br><br/>
                    <label class="switch is-pulled-right">
                      <input type="checkbox">
                        <span class="slider round"></span>
                  </label>
                <br><br/>
                  <label class="switch is-pulled-right">
                      <input type="checkbox">
                        <span class="slider round"></span>
                  </label>
                  <br><br/>
                  <label class="switch is-pulled-right">
                      <input type="checkbox">
                        <span class="slider round"></span>
                  </label>
                  <br><br/>
                  <label class="switch is-pulled-right">
                      <input type="checkbox">
                        <span class="slider round"></span>
                  </label>
                  </div>
                  </div>
                  <!--<input type = "levelType" name = "level" v-model ="">  -->
                  <button class="button is-fullwidth is-info is-outlined">Submit</button>
              </div>
          </div>
        </div>
      </div>

</body>
  </div>
  <div v-else>
  <LoginBadge />
</div>
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
    #grad4 
    {
      background-image: linear-gradient(to right, rgb(0, 110, 255) ,  rgb(0, 255, 251), rgba(0, 110, 255));
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 45px;
      height: 26px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    input:checked + .slider {
      background-color: #2196F3;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
    .slider.round {
      border-radius: 26px;
    }
    .slider.round:before {
      border-radius: 50%;
    }
</style>
