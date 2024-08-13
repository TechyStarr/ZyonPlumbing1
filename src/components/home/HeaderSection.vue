<template>
  <div class="relative md:mt-header-margin">
    <SkeletonLoader v-if="!imageLoaded" :width="'100%'" :height="'692px'" :borderRadius="'0'" />
    <img v-lazy="currentImage" alt="Header Image" class="w-full h-[692px] md:h-[843px] object-cover" @load="onImageLoad" v-show="imageLoaded">
    <div ref="textContent" class="absolute top-48 md:top-40 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
      <h1 class="text-[32px] md:text-[64px] w-full md:w-[720px] text-center md:text-left font-extrabold leading-tight">
        We Keep the Water Flowing and the Heat Glowing
      </h1>
      <h2 class="text-[16px] md:text-[20px] w-full md:w-[607px] text-center md:text-left font-sans">
        We're your friendly neighborhood plumbers, ready to tackle any leak, drip, or clog with a smile
      </h2>
      <div class="flex justify-center md:justify-start">
        <router-link to="/contact">
          <button class="w-[150px] md:w-[170px] lg:w-[190px] h-[50px] md:h-[55px] lg:h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full md:mt-10">
            Contact Us
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from '@/components/SkeletonLoader.vue'; // Adjust the path if necessary
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SkeletonLoader
  },
  data() {
    return {
      images: [
        require('@/assets/header-img.png'),
        require('@/assets/header-img2.png')
      ],
      currentIndex: 0,
      imageLoaded: false
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    this.startImageSlideshow();
    this.animateTextContent();
  },
  methods: {
    startImageSlideshow() {
      setInterval(() => {
        this.imageLoaded = false;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000);
    },
    animateTextContent() {
      gsap.from(this.$refs.textContent, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.textContent,
          start: "top 80%",
        }
      });
    },
    onImageLoad() {
      this.imageLoaded = true;
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
