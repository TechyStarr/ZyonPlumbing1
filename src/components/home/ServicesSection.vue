<template>
    <div class="w-full mt-[0px] md:mt-[60px] lg:mt-18 py-12">
      <!-- Desktop/Tablet View -->
      <div class="hidden md:flex flex-col items-center my-12">
        <div class="flex space-x-5 items-center ml-8 md:ml-24 mb-8">
          <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
          <h1 class="font-extrabold text-[18px] lg:text-[32px]">OUR RECENT PROJECTS</h1>
        </div>
        <div class="flex space-x-4 project-img" ref="projectImages">
          <div v-for="(image, index) in images" :key="index" class="relative">
            <SkeletonLoader v-if="!image.loaded" :width="'393px'" :height="'508px'" />
            <img 
              v-lazy="image.src" 
              :alt="'Project ' + (index + 1)" 
              @load="imageLoaded(index)" 
              class="w-[393px] h-[508px]"
              v-show="image.loaded"
            >
          </div>
          <div class="space-y-2">
            <div v-for="(image, index) in images.slice(1, 3)" :key="index" class="relative">
              <SkeletonLoader v-if="!image.loaded" :width="'418px'" :height="'250px'" />
              <img 
                v-lazy="image.src" 
                :alt="'Project ' + (index + 2)" 
                @load="imageLoaded(index)" 
                class="w-[418px] h-[250px]"
                v-show="image.loaded"
              >
            </div>
          </div>
          <div v-for="(image, index) in images.slice(3, 4)" :key="index" class="relative">
            <SkeletonLoader v-if="!image.loaded" :width="'314px'" :height="'509px'" />
            <img 
              v-lazy="image.src" 
              :alt="'Project ' + (index + 4)" 
              @load="imageLoaded(index)" 
              class="w-[314px] h-[509px]"
              v-show="image.loaded"
            >
          </div>
        </div>
        <div class="flex space-x-4 mt-2">
          <div v-for="(image, index) in images.slice(4)" :key="index" class="relative">
            <SkeletonLoader v-if="!image.loaded" :width="'393px'" :height="'250px'" />
            <img 
              v-lazy="image.src" 
              :alt="'Project ' + (index + 5)" 
              @load="imageLoaded(index)" 
              class="w-[393px] h-[250px]"
              v-show="image.loaded"
            >
          </div>
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
            <div v-for="(image, index) in mobileImages" :key="index" class="relative">
              <SkeletonLoader v-if="!image.loaded" :width="'241px'" :height="'311px'" />
              <img 
                v-lazy="image.src" 
                :alt="'Project Image ' + index" 
                @load="imageLoaded(index, true)" 
                class="w-[241px] h-[311px] flex-shrink-0"
                v-show="image.loaded"
              >
            </div>
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
  import SkeletonLoader from '@/components/SkeletonLoader.vue'; // Import the Skeleton Loader
  
  gsap.registerPlugin(ScrollTrigger);
  
  export default {
    name: 'AboutUsSection',
    components: {
      SkeletonLoader,
    },
    data() {
      return {
        currentIndex: 0,
        images: [
          { src: require('@/assets/Frame-48.png'), loaded: false },
          { src: require('@/assets/Frame-45.png'), loaded: false },
          { src: require('@/assets/Frame-50.png'), loaded: false },
          { src: require('@/assets/Frame-44.png'), loaded: false },
          { src: require('@/assets/Frame-51.png'), loaded: false },
          { src: require('@/assets/Frame-52.png'), loaded: false },
          { src: require('@/assets/Frame-53.png'), loaded: false },
        ],
        slideInterval: null,
      };
    },
    mounted() {
      this.startAutoSlide();
      this.$nextTick(() => {
        this.animateImages();
      });
    },
    beforeUnmount() {
      this.stopAutoSlide();
    },
    methods: {
      imageLoaded(index) {
        this.images[index].loaded = true;
      },
      prevImage() {
        this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
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
        if (images) {
          gsap.from(images, {
            scale: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: this.$refs.projectImages,
              start: "top 80%",
            }
          });
        }
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  