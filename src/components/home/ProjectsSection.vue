<template>
  <div class="w-full mt-[0px] md:mt-[60px] lg:mt-18 py-12">
    <!-- Desktop/Tablet View -->
    <div class="hidden md:flex flex-col items-center my-16 lg:my-12">
      <div class="flex space-x-5 items-center ml-8 md:ml-24 mb-8">
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
        <h1 class="font-extrabold text-[18px] lg:text-[32px]">OUR RECENT PROJECTS</h1>
      </div>
      <div class="flex space-x-4 project-img" ref="projectImages">
        <img v-lazy="require('@/assets/Frame-48.png')" alt="Project 1" class="md:w-[260px] xl:w-[393px] lg:w-[303px] h-[508px]">
        <div class="space-y-2">
          <img v-lazy="require('@/assets/Frame-45.png')" alt="Project 2" class="md:w-[280px] xl:w-[418px] lg:w-[335px] h-[250px]">
          <img v-lazy="require('@/assets/Frame-50.png')" alt="Project 3" class="md:w-[280px] xl:w-[418px] lg:w-[335px] h-[250px]">
        </div>
        <img v-lazy="require('@/assets/Frame-44.png')" alt="Project 4" class="md:w-[230px] xl:w-[314px] lg:w-[280px] h-[509px]">
      </div>
      <div class="flex space-x-4 mt-2">
        <img v-lazy="require('@/assets/Frame-51.png')" alt="Project 5" class="md:w-[260px] xl:w-[393px] lg:w-[303px] h-[250px]">
        <img v-lazy="require('@/assets/Frame-52.png')" alt="Project 6" class="md:w-[280px] xl:w-[418px] lg:w-[335px] h-[250px]">
        <img v-lazy="require('@/assets/Frame-53.png')" alt="Project 7" class="md:w-[230px] xl:w-[314px] lg:w-[280px] h-[250px]">
      </div>
    </div>

    <!-- Mobile View -->
    <div class="block md:hidden relative">
      <div @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
        <img v-lazy="require('@/assets/chevron-left.png')" alt="Left Arrow" class="h-6">
      </div>
      <div @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gra bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer">
        <img v-lazy="require('@/assets/chevron-right.png')" alt="Right Arrow" class="h-6">
      </div>

      <div class="flex overflow-hidden relative mt-8" style="width: 241px; height: 311px; margin: 0 auto;">
        <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <img v-for="(image, index) in mobileImages" :key="index" v-lazy="image" alt="Project Image" class="w-[241px] h-[311px] flex-shrink-0">
        </div>
      </div>
      
      <div class="flex justify-center space-x-2 mt-4">
        <span v-for="(image, index) in mobileImages" :key="index" @click="goToImage(index)" :class="{'bg-gray-800': index === currentIndex, 'bg-gray-300': index !== currentIndex}" class="w-2 h-2 rounded-full cursor-pointer"></span>
      </div>
    </div>
    <router-link to="/services">
      <button class="w-[190px] h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full mt-8">
        View More
      </button>
    </router-link>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutUsSection',
  data() {
    return {
      currentIndex: 0,
      mobileImages: [
        require('@/assets/Frame-48.png'),
        require('@/assets/Frame-45.png'),
        require('@/assets/Frame-50.png'),
        require('@/assets/Frame-44.png'),
        require('@/assets/Frame-51.png'),
        require('@/assets/Frame-52.png'),
        require('@/assets/Frame-53.png'),
      ],
      slideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
    this.animateImages();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex === 0) ? this.mobileImages.length - 1 : this.currentIndex - 1;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex === this.mobileImages.length - 1) ? 0 : this.currentIndex + 1;
    },
    goToImage(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(this.nextImage, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
    animateImages() {
      const images = this.$refs.projectImages.querySelectorAll('img');
      gsap.from(images, {
        scale: 0,
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
