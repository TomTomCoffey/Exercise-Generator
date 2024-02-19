<script setup lang="ts"></script>
<template>
  <body id="grad2">
    <div class="block pt-5"></div>
    <div class="columns">
      <div
        class="column is is-three-fifths is-offset-one-fifth is narrow-mobile"
      >
        <div class="block pt-5"></div>
        <nav class="breadcrumb mb-3" aria-label="breadcrumbs">
          <ul>
            <RouterLink to="/">
              <li><a href="#">Home</a></li>

              <li class="is-active">
                <a href="#" aria-current="page">Legs</a>
              </li>
            </RouterLink>
          </ul>
        </nav>
        <div class="box mb-3">
          <div class="columns col">
            <div class="column is-half">
              <h1 class="title has-text-centered"><u>Legs</u></h1>
              <p class="is-size-4">
                Legs are divided into four main muscle groups: glutes,
                hamstrings, calves, and quadriceps.
              </p>
            </div>

            <div class="column is-half">
              <h1 class="title has-text-centered">Location</h1>
              <img src="../assets/images/legsRed.png" />
            </div>
          </div>
          <h1 class="title has-text-centered">Leg Exercises</h1>
          <hr class="navbar-divider-black" />
          <div class="columns col">
            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/seatedCurl.png" />
              </figure>
            </div>

            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Seated Curls</u></h1>
              <div>
                <p>
                  <strong><i>Seated Curls:</i></strong> Adjust the seat so the
                  footpad is slightly above your heals. Slowly pull your legs
                  down and in before returning to the starting position. Repeat
                  for this motion for all reps.
                </p>
              </div>
            </div>
          </div>

          <div class="columns col">
            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Squats</u></h1>
              <div>
                <p>
                  <strong><i>Squats:</i></strong> Grip the barbell so your hands
                  are slightly farther apart than your shoulders and position
                  the barbell so that it rests on your upper back. Stand with
                  your back straight and feet shoulder width apart. Without
                  arching your back, bend your knees while pushing your hips
                  back until your legs are parallel (or slightly more than
                  parallel) with the ground, then slowly stand up.
                </p>
              </div>
            </div>

            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/barbell-squat.jpeg" />
              </figure>
            </div>
          </div>

          <div class="columns col">
            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/lunges.png" />
              </figure>
            </div>

            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Lunges</u></h1>
              <div>
                <p>
                  <strong><i>Lunges:</i></strong> Stand with your feet shoulder
                  width apart Take a big step forward until your thigh is
                  parallel with the floor. Return the leg to the starting
                  position and then repeat the movement with the other leg.
                </p>
              </div>
            </div>
          </div>

          <div class="columns col">
            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Squats</u></h1>
              <div>
                <p>
                  <strong><i>Squats:</i></strong> Grip the barbell so your hands
                  are slightly farther apart than your shoulders and position
                  the barbell so that it rests on your upper back. Stand with
                  your back straight and feet shoulder width apart. Without
                  arching your back, bend your knees while pushing your hips
                  back until your legs are parallel or slightly more than
                  parallel with the ground, then slowly stand up.
                </p>
              </div>
            </div>

            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/barbell-squat.jpeg" />
              </figure>
            </div>
          </div>

          <div class="columns col">
            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/Calf-Raises.jpeg" />
              </figure>
            </div>

            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Calf Raises</u></h1>
              <div>
                <p>
                  <strong><i>Calf Raises:</i></strong> Holding a dumbbell in
                  each hand with your arms pointing straight down stan with your
                  feet shoulder length apart. Slowly raise the back of your feet
                  until your standing on your toes. Then, slowly lower your feet
                  back to the starting position.
                </p>
              </div>
            </div>
          </div>

          <div class="columns col">
            <div class="column is-half">
              <h1 class="title has-text-centered image"><u>Deadlift</u></h1>
              <div>
                <p>
                  <strong><i>Deadlift:</i></strong> Stand with your legs
                  shoulder width apart and your feet under the bar. Squat down
                  to grab the bar and slowly rise keeping your back straight and
                  allowing to the bar almost graze your shins. After standing up
                  fully slowly lower the bar back down using the same motion.
                </p>
              </div>
            </div>

            <div class="column is-half">
              <figure class="image">
                <img src="../assets/images/Deadlift.jpeg" />
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
body {
  background-color: rgba(0, 149, 255, 0.167);
}
.box {
  box-shadow: 1px 1px 6px darkgray;
}
#grad2 {
  background-image: linear-gradient(
    to right,
    rgb(255, 102, 0),
    rgb(255, 0, 0),
    rgba(255, 102, 0)
  );
}
.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
