<template>
  <div>
    <div class="relative md:mt-header-margin">
      <img v-lazy="require('@/assets/image1-2.png')" alt="Header Image" class="w-full h-[449px] object-cover">
      <div ref="servicesText" class="absolute top-48 md:top-40 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
        <h1 class="text-[32px] md:text-[64px] w-full md:w-[720px] text-center md:text-left font-extrabold leading-tight">
          Services
        </h1>
      </div>
    </div>
    <div ref="servicesParagraph" class="w-full h-auto space-y-12 px-4 md:px-12 py-12">
      <div class="flex">
        <p class="font-nunito text-left w-full md:w-[1211px]">
          We are dedicated to providing high-quality services that ensure the comfort and safety of your home or business. Don't let plumbing problems disrupt your life! Zyons Plumbing and Heating offers a comprehensive range of residential and commercial plumbing services to keep your home or business functioning efficiently and comfortably. Explore our range of services below:
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ServicesHeaderSection',
  mounted() {
    this.animateServicesSection();
  },
  methods: {
    animateServicesSection() {
      // Animate the "Services" text
      gsap.from(this.$refs.servicesText, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.servicesText,
          start: "top 80%",
        }
      });

      // Animate the paragraph text
      gsap.from(this.$refs.servicesParagraph, {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.servicesParagraph,
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
