<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to our Blog!</h1>
    <p class="text-lg mb-8">
      Here you can find our latest news, updates, and insights.
    </p>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-xl font-bold mb-2">Blog Post Title 1</h2>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          porttitor risus libero, nec mollis urna dapibus eu. Vivamus sed
          tellus euismod, semper sapien eget, laoreet ex.
        </p>
      </div>
      <div class="md:w-1/2">
        <h2 class="text-xl font-bold mb-2">Blog Post Title 2</h2>
        <p class="text-gray-600">
          Donec sit amet felis ut ex lacinia efficitur. Sed in dapibus nisl,
          ut mollis arcu. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1024px;
}
</style>
