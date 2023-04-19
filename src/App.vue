<template>
  <!-- https://youtu.be/jPOw08utA58 -->
  <nav
    class="bg-blue-500 px-4 py-3 flex flex-wrap items-center justify-between"
  >
    <div class="flex items-center">
      <h2 class="text-3xl font-bold text-white">nextCode24</h2>
    </div>
    <div class="flex items-center mt-4 lg:mt-0">
      <router-link
        to="/"
        class="text-white ml-4 lg:ml-8 text-lg hover:underline"
        >Home</router-link
      >
      <router-link
        to="/services"
        class="text-white ml-4 lg:ml-8 text-lg hover:underline"
        >Services</router-link
      >
      <router-link
        to="/about"
        class="text-white ml-4 lg:ml-8 text-lg hover:underline"
        >About</router-link
      >
      <router-link
        to="/blog"
        class="text-white ml-4 lg:ml-8 text-lg hover:underline"
        >Blog</router-link
      >
      <router-link
        to="/contact"
        class="text-white ml-4 lg:ml-8 text-lg hover:underline"
        >Contact</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<style></style>
