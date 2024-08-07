<template>
  <div class="w-full space-y-1 mt-8 md:mt-[70px] px-4 md:px-0">
    <div>
      <div class="flex space-x-5 justify-center items-center">
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
        <h1 class="font-extrabold text-[18px] md:text-[32px]">OUR COMMITMENT</h1>
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      </div>
      <div class="flex flex-col md:flex-row space-x-0 md:space-x-6 md:items-start md:relative mt-0 md:mt-4">
        <img v-lazy="require('@/assets/header-img.png')" alt="Header Image" class="hidden md:block w-full md:w-[777px] h-[181px] md:h-[518px] object-cover md:ml-[-50px] lg:ml-[-100px] xl:ml-[-200px]">
        <div class="space-y-10 px-4 md:px-0 mt-4 md:mt-0">
          <p class="font-nunito text-left w-full md:w-[637px] mt-6 md:mt-12 md:mt-24">
            At Zyons Plumbing & Heating, we are committed to building lasting relationships with our clients. We believe in transparency, honesty, and delivering on our promises. Whether you need a quick repair or a major installation, you can count on us to get the job done right. We don't just fix leaky faucets and clogged drains, we keep homes comfortable and families happy. We believe everyone deserves a home that functions smoothly and feels like a haven. That's why we take pride in being your trusted partner in plumbing and heating, ensuring your comfort and peace of mind.
          </p>
          <p class="font-nunito text-left w-full md:w-[637px]">
            Thank you for considering Zyons Plumbing & Heating for your plumbing and heating needs. We look forward to serving you!
          </p>
          <button class="w-[190px] h-[60px] mb- bg-[#181818] hover:bg-customGold text-white font-bold rounded-full">
            Request a plumber
          </button>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurCommitmentSection',
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
