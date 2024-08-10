<template>
  <div>
    <div class="relative md:mt-[175px]">
      <img v-lazy="require('@/assets/header-img.png')" alt="Header Image" class="w-full h-[449px] object-cover">
      <div class="absolute top-64 md:top-40 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
        <h1 class="text-[32px] md:text-[64px] w-full md:w-[720px] text-center md:text-left font-extrabold leading-tight">
          Blog
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHeaderSection',
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>