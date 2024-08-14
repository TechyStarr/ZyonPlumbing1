<template>
  <div id="our-project-gallery" class="w-full mt-8 md:mt-18 py-4 md:py-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      <h1 class="font-extrabold text-[18px] md:text-[32px]">OUR PROJECT GALLERY</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
    </div>

    <div class="flex justify-center items-center">
        <div class="my-12 mx-4 xl:mx-24 space-y-4 justify-center items-center ml-[35px]">
          <div class="flex flex-wrap md:flex-nowrap space-x-4" ref="projectImages">
            <img v-lazy="require('@/assets/Frame-48.png')" alt="Project 1" class="w-[100px] md:w-[280px] lg:w-[365px] xl:w-[393px] h-[181px] md:h-[508px] object-cover rounded-[10px]">
            <div class="space-y-2">
              <img v-lazy="require('@/assets/Frame-45.png')" alt="Project 2" class="w-[109px] md:w-[340px] lg:w-[380px] xl:w-[418px] h-[89px] md:h-[250px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/Frame-50.png')" alt="Project 3" class="w-[109px] md:w-[340px] lg:w-[380px] xl:w-[418px] h-[89px] md:h-[250px] object-cover rounded-[10px]">
            </div>
            <img v-lazy="require('@/assets/Frame-44.png')" alt="Project 4" class="w-[100px] md:w-[260px] lg:w-[280px] xl:w-[314px] h-[181px] md:h-[509px] object-cover rounded-[10px]">
          </div>
          <div class="flex flex-wrap md:flex-nowrap space-x-4 mt-2">
            <img v-lazy="require('@/assets/Frame-51.png')" alt="Project 5" class="w-[163px] md:w-[360px] lg:w-[370px] xl:w-[393px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
            <img v-lazy="require('@/assets/Frame-52.png')" alt="Project 6" class="w-[163px] md:w-[360px] lg:w-[370px] xl:w-[418px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
            <img v-lazy="require('@/assets/Frame-53.png')" alt="Project 7" class="hidden lg:block md:w-[260px] lg:w-[280px] xl:w-[314px] h-[98px] md:h-[250px] object-cover rounded-[10px]">
          </div>
          <div class="flex flex-wrap md:flex-nowrap space-x-4">
            <div class="space-y-2">
              <img v-lazy="require('@/assets/image-5.png')" alt="Project 8" class="w-[103px] md:w-[280px] lg:w-[365px] xl:w-[393px] h-[181px] md:h-[508px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/plumbing1.png')" alt="Project 9" class="w-[103px] md:w-[280px] lg:w-[365px] xl:w-[393px] h-[89px] md:h-[292px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/plumbing6.png')" alt="Project 10" class="w-[103px] md:w-[280px] lg:w-[365px] xl:w-[393px] h-[153px] md:h-[508px] object-cover rounded-[10px]">
            </div>
            <div class="space-y-2">
              <img v-lazy="require('@/assets/plumbing2.png')" alt="Project 11" class="w-[100px] md:w-[340px] lg:w-[380px] xl:w-[418px] h-[214px] md:h-[613px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/plumbing3.png')" alt="Project 12" class="w-[100px] md:w-[340px] lg:w-[380px] xl:w-[418px] h-[214px] md:h-[697px] object-cover rounded-[10px]">
            </div>
            <div class="space-y-2">
              <img v-lazy="require('@/assets/plumbing7.png')" alt="Project 13" class="w-[103px] lg:w-[280px] xl:w-[314px] h-[181px] md:h-[509px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/plumbing4.png')" alt="Project 14" class="w-[103px] lg:w-[280px] xl:w-[314px] h-[89px] md:h-[509px] object-cover rounded-[10px]">
              <img v-lazy="require('@/assets/plumbing5.png')" alt="Project 15" class="w-[103px] lg:w-[280px] xl:w-[314px] h-[153px] md:h-[288px] object-cover rounded-[10px]">
            </div>
          </div>
        </div>      
    </div>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectGallery',
  mounted() {
    this.animateImages();
  },
  methods: {
    animateImages() {
      const images = this.$refs.projectImages.querySelectorAll('img');
      gsap.from(images, {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: images,
          start: "top 80%",
        }
      });
    }
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
