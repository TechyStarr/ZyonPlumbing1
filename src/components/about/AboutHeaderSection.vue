<template>
  <div class="relative lg:mt-header-margin">
    <img v-lazy="require('@/assets/image-1.png')" alt="Header Image" class="w-full h-[449px] object-cover">
    <div ref="aboutText" class="absolute top-64 md:top-40 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
      <h1 class="text-[32px] md:text-[64px] w-full md:w-[720px] text-center md:text-left font-extrabold leading-tight">
        About
      </h1>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutHeaderSection',
  mounted() {
    this.animateAboutText();
  },
  methods: {
    animateAboutText() {
      gsap.from(this.$refs.aboutText, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.aboutText,
          start: "top 80%",
        }
      });
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
