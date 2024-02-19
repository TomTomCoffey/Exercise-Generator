<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { useSession, logout } from "../model/user";

const router = useRouter();
const session = useSession();

function logoutUser() {
  logout();
  router.push("/login");
}
</script>

<template>
  <nav class="navbar has-shadow is-fixed-top">
    <!-- This Starts the Navigation Bar-->

    <div class="navbar-brand">
      <!-- Navigation Bar Logo-->
      <a href="https://www.newpaltz.edu/" class="navbar-item">
        <img src="" style="max-height: 70px" class="py-2 px-2" />
      </a>
    </div>
    <!-- Navigation Bar Logo End-->
    <div class="navbar-menu">
      <!-- Navigation Bar Menu-->

      <div class="navbar-start">
        <!-- Left Side NavBar-->
        <RouterLink to="/" class="navbar-item">
          <div class="span">
            <div class="icon pr-3">
              <i class="fa-solid fa-home"></i>
            </div>
          </div>
          Home
        </RouterLink>
        <RouterLink to="/about" class="navbar-item">
          <div class="span">
            <div class="icon pr-3">
              <i class="fa-solid fa-info"></i>
            </div>
          </div>
          About
        </RouterLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <div class="span">
              <div class="icon pr-3">
                <i class="fa-solid fa-dumbbell"></i>
              </div>
            </div>
            Workouts</a
          >
          <div class="navbar-dropdown">
            <RouterLink to="/arms" class="navbar-item">Arms</RouterLink>
            <RouterLink to="/chest" class="navbar-item">Chest</RouterLink>
            <RouterLink to="/back" class="navbar-item">Back</RouterLink>
            <RouterLink to="/shoulders" class="navbar-item"
              >Shoulders</RouterLink
            >
            <RouterLink to="/legs" class="navbar-item">Legs</RouterLink>
            <RouterLink to="/abs" class="navbar-item">Abs</RouterLink>
            <RouterLink to="/cardio" class="navbar-item">Cardio</RouterLink>
          </div>
        </div>

        <RouterLink to="/personal records" class="navbar-item">
          <div class="span">
            <div class="icon pr-3">
              <i class="fa-solid fa-trophy"></i>
            </div>
          </div>
          Personal Records
        </RouterLink>
      </div>

      <div v-if="session.user">
        <div class="navbar-end">
          <!-- Right Side NavBar-->
          <div style="position: relative; top: 15px">
            <RouterLink to="/settings">
              <a class="navbar-item">
                <button class="button is-info is-outlined">Settings</button>
              </a>
            </RouterLink>
          </div>

          <div style="position: relative; top: 15px">
            <a class="navbar-item">
              <button class="button is-danger is-outlined" @click="logoutUser">
                Logout
              </button>
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <RouterLink to="/login">
          <div class="navbar-end">
            <!-- Right Side NavBar-->
            <div style="position: relative; top: 15px">
              <a class="navbar-item">
                <button class="button is-info is-outlined">Login</button>
              </a>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <!-- Navigation Bar Menu End-->
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #f5f5f5;
  height: 80px;
}

.navbar-item {
  color: #000000;
}

.navbar-item:hover {
  background-color: #f5f5f5;
}

.navbar-item.is-active {
  background-color: #f5f5f5;
}

.navbar-dropdown {
  background-color: #f5f5f5;
}

.navbar-dropdown:hover {
  background-color: #f5f5f5;
}

.navbar-dropdown.is-active {
  background-color: #f5f5f5;
}

.navbar-link {
  color: #000000;
}

.navbar-link:hover {
  background-color: #f5f5f5;
}

.navbar-link.is-active {
  background-color: #f5f5f5;
}

.navbar-menu {
  background-color: #f5f5f5;
}

.navbar-menu:hover {
  background-color: #f5f5f5;
}

.navbar-menu.is-active {
  background-color: #f5f5f5;
}

.navbar-start {
  background-color: #f5f5f5;
}

.navbar-start:hover {
  background-color: #f5f5f5;
}

.navbar-start.is-active {
  background-color: #f5f5f5;
}

.navbar-end {
  background-color: #f5f5f5;
}

.navbar-end:hover {
  background-color: #f5f5f5;
}

.navbar-end.is-active {
  background-color: #f5f5f5;
}

.navbar-brand {
  background-color: #f5f5f5;
}

.navbar-brand:hover {
  background-color: #f5f5f5;
}

.navbar-brand.is-active {
  background-color: #f5f5f5;
}

.navbar-dropdown {
  background-color: #f5f5f5;
}

.navbar-dropdown:hover {
  background-color: #f5f5f5;
}

.navbar-dropdown.is-active {
  background-color: #f5f5f5;
}
</style>
