<template>
  <div class="page-container">
    <!-- Navbar -->
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          My MDV-CODING-EXAM
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link :to="{ name: 'CreateNewTask' }" class="navbar-item">
            Add new task
          </router-link>
        </div>
      </div>
    </nav>

    <div style="margin-top: 6rem">
      <router-view />
    </div>
  </div>
</template>

<style>
@import "~bulma/css/bulma.css";

.page-container {
  background-color: #ecfdf5; /* Set your desired background color */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
}

</style>
