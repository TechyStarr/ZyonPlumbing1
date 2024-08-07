<template>
  <div>
    <div class="relative">
      <img v-lazy="require('@/assets/image1-2.png')" alt="Header Image" class="w-full h-[449px] object-cover">
      <div class="absolute top-24 left-6 px-4 md:px-20 py-16 md:py-32 w-full md:w-[750px] space-y-4 text-white">
        <h1 class="text-[32px] md:text-[64px] text-left font-extrabold leading-tight">
          Services
        </h1>
      </div>
    </div>
    <div class="w-full h-auto space-y-12 px-4 md:px-12 py-12">
      <div class="flex">
        <p class="font-nunito text-left w-full md:w-[1211px]">
          We are dedicated to providing high-quality services that ensure the comfort and safety of your home or business. Don't let plumbing problems disrupt your life! Zyons Plumbing and Heating offers a comprehensive range of residential and commercial plumbing services to keep your home or business functioning efficiently and comfortably. Explore our range of services below:
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesHeaderSection',
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
