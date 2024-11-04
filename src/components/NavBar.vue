<script setup lang="ts">

</script>

<template>
  <!-- div for the background, contain the navbar -->
  <header>
    <div id="logo">
      <!-- homelib logo anchor, link to home -->
      homelib
    </div>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink >
      <RouterLink :to="{ name: 'about' }">About</RouterLink >
      <RouterLink :to="{ name: 'login' }">Login</RouterLink >
      <RouterLink :to="{ name: 'library' }">Library</RouterLink >
    </nav>
    <!-- mobile: hamburger menu for menu -->
  </header>
  <!-- Collections to go to list of collections -->
  <!-- avatar for account menu -->
</template>

<style>
header {
  background-color: grey;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
</style>