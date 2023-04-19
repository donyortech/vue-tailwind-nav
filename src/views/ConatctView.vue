<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <p class="text-lg mb-8">
      Have any questions or inquiries? Feel free to contact us using the form below or through any of our social media channels.
    </p>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-xl font-bold mb-2">Our Information</h2>
        <p class="text-gray-600">
          <strong>Address:</strong> 123 Main St, Anytown USA<br>
          <strong>Email:</strong> info@example.com<br>
          <strong>Phone:</strong> (555) 123-4567
        </p>
      </div>
      <div class="md:w-1/2">
        <h2 class="text-xl font-bold mb-2">Contact Form</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
              Message
            </label>
            <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message here..."></textarea>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </form>
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
