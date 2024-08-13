<template>
  <div class="w-full px-4 md:py-12">
    <div class="flex flex-col md:flex-row justify-between px- md:px-0 xl:px-24 relative">
      <div
        ref="imageContainer"
        class="relative left- justify-star -left-16 md:left-16 lg:left-0 flex justify-center lg:justify-start  mt-[32px] md:mt-[70px]"
      >
        <!-- Skeleton Loader for First Image -->
        <SkeletonLoader v-if="!imageLoaded1" :width="'258px'" :height="'200px'" />
        <div v-show="imageLoaded1" class="absolute w-[258px] md:w-[280px] lg:w-[411px] h-[200px] md:h-[244px] lg:h-[284px]">
          <img
            v-lazy="require('@/assets/Frame-17.png')"
            alt="Header Image"
            @load="imageLoaded1 = true"
            class="w-full h-full rounded-[10px] object-cover"
          />
        </div>
        
        <!-- Second Image (Frame) -->
        <div
          class="relative w-[220px] md:w-[200px] lg:w-[297px] h-[280px] md:h-[337px] lg:h-[477px] bg-0 border-[15px] border-foundationGoldNormal rounded-[10px] left-28 md:left-28 lg:left-40 top-20 md:top-36 lg:top-40"
        ></div>
        
        <!-- Skeleton Loader for Overlay Image -->
        <SkeletonLoader v-if="!imageLoaded2" :width="'220px'" :height="'280px'" />
        <div v-show="imageLoaded2" class="absolute rounded-[10px] top-[132px] md:top-[180px] lg:top-48 left-[225px] md:left-[150px] lg:left-48 w-[220px] md:w-[220px] lg:w-[331px] h-[280px] md:h-[344px] lg:h-[477px]">
          <img
            v-lazy="require('@/assets/image3.png')"
            alt="Overlay Image"
            @load="imageLoaded2 = true"
            class="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      </div>

      <div
        ref="textContainer"
        class="mt-48 md:mt-16 lg:mt-[60px] lg:mr-"
      >
        <div class="flex space-x-5 items-center pb-6">
          <hr class="w-[50px] border-t-[3px] border-lineStrokeDark" />
          <h1 class="font-extrabold text-[32px] foundationGreyDarker">ABOUT US</h1>
        </div>
        <div class="pb-5">
          <p class="font-nunito text-left w-full md:w-[444px] lg:w-[544px] text-foundationGreyDarkActive">
            Zyons Plumbing and Heating is your trusted partner for all things plumbing and heating. Founded on the principles of integrity and excellence, we have been serving the community for over a decade.
            Our certified technicians are passionate about what they do and committed to delivering the best service every time. We provide a wide range of services for both residential and commercial clients.
          </p>

          <p class="font-nunito text-left w-full md:w-[444px] lg:w-[544px] text-foundationGreyDarkActive pt-10">
            At Zyons, we offer top-notch plumbing and heating services to keep your home comfortable and running smoothly. Whether it's a leaky faucet or a full heating system installation, our skilled team is ready to help. Reliable, friendly, and always professional – that's the Zyons promise.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 font-nunito">
          <div class="flex items-center space-x-2">
            <img v-lazy="require('@/assets/check-square.png')" alt="Check square" class="h-6" />
            <p>Qualified Team</p>
          </div>
          <div class="flex items-center space-x-2">
            <img v-lazy="require('@/assets/check-square.png')" alt="Check square" class="h-6" />
            <p>Affordable Pricing</p>
          </div>
          <div class="flex items-center space-x-2">
            <img v-lazy="require('@/assets/check-square.png')" alt="Check square" class="h-6" />
            <p>Plumbing Experts</p>
          </div>
          <div class="flex items-center space-x-2">
            <img v-lazy="require('@/assets/check-square.png')" alt="Check square" class="h-6" />
            <p>Quick Service</p>
          </div>
          <div class="flex justify-center md:justify-start lg:justify-start mt-4 lg:mt-0">
            <a href="#contact">
              <button class="w-[150px] md:w-[170px] lg:w-[190px] h-[50px] md:h-[55px] lg:h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full md:mt-10">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkeletonLoader from '@/components/SkeletonLoader.vue'; // Adjust the path accordingly

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AboutUsSection",
  components: {
    SkeletonLoader,
  },
  data() {
    return {
      imageLoaded1: false,
      imageLoaded2: false,
    };
  },
  mounted() {
    // GSAP Animation for the image
    gsap.from(this.$refs.imageContainer, {
      x: "-100%",
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.imageContainer,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // GSAP Animation for the text
    gsap.from(this.$refs.textContainer, {
      x: "100%",
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: this.$refs.textContainer,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
.bg-customGold {
  background-color: #BA8C2A;
}
</style>
