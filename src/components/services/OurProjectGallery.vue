<template>
  <div class="w-full mt-8 md:mt-18 py-4 md:py-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      <h1 class="font-extrabold text-[18px] md:text-[32px]">OUR PROJECT GALLERY</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
    </div>

    <div class="my-12 mx-4 md:mx-24 space-y-4 justify-center items-center ml-[35px]">
      <div class="flex flex-wrap md:flex-nowrap space-x-4">
        <img v-lazy="require('@/assets/Frame-48.png')" alt="Check square" class="w-[100px] md:w-[393px] h-[181px] md:h-[508px] object-cover rounded-[10px]">
        <div class="space-y-2 flex-">
          <img v-lazy="require('@/assets/Frame-45.png')" alt="Check square" class="w-[109px] md:w-[418px] h-[89px] md:h-[250px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/Frame-50.png')" alt="Check square" class="w-[109px] md:w-[418px] h-[89px] md:h-[250px] object-cover rounded-[10px]">
        </div>
        <img v-lazy="require('@/assets/Frame-44.png')" alt="Check square" class="w-[100px] md:w-[314px] h-[181px] md:h-[509px] object-cover rounded-[10px]">
      </div>
      <div class="flex flex-wrap md:flex-nowrap space-x-4 mt-2">
        <img v-lazy="require('@/assets/Frame-51.png')" alt="Check square" class="w-[163px] md:w-[393px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
        <img v-lazy="require('@/assets/Frame-52.png')" alt="Check square" class="w-[163px] md:w-[418px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
        <img v-lazy="require('@/assets/Frame-53.png')" alt="Check square" class="hidden md:w-[314px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
      </div>
      <div class="flex flex-wrap md:flex-nowrap space-x-4">
        <div class="space-y-2 flex-">
          <img v-lazy="require('@/assets/image-5.png')" alt="Check square" class="w-[103px] md:w-[393px] h-[181px] md:h-[508px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/plumbing1.png')" alt="Check square" class="w-[103px] md:w-[393px] h-[89px] md:h-[292px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/plumbing6.png')" alt="Check square" class="w-[103px] md:w-[393px] h-[153px] md:h-[508px] object-cover rounded-[10px]">
        </div>
        <div class="space-y-2 flex-">
          <img v-lazy="require('@/assets/plumbing2.png')" alt="Check square" class="w-[100px] md:w-[418px] h-[214px] md:h-[613px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/plumbing3.png')" alt="Check square" class="w-[100px] md:w-[418px] h-[214px] md:h-[697px] object-cover rounded-[10px]">
        </div>
        <div class="space-y-2 flex-">
          <img v-lazy="require('@/assets/plumbing7.png')" alt="Check square" class="w-[103px] md:w-[314px] h-[181px] md:h-[509px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/plumbing4.png')" alt="Check square" class="w-[103px] md:w-[314px] h-[89px] md:h-[509px] object-cover rounded-[10px]">
          <img v-lazy="require('@/assets/plumbing5.png')" alt="Check square" class="w-[103px] md:w-[314px] h-[153px] md:h-[288px] object-cover rounded-[10px]">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectGallery',
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
