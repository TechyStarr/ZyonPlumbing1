<template>
  <div class="relative">
    <img v-lazy="currentImage" alt="Header Image" class="w-full h-[692px] md:h-[843px] object-cover">
    <div class="absolute top-48 md:top-40 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
      <h1 class="text-[32px] md:text-[64px] w-full md:w-[720px] text-center md:text-left font-extrabold leading-tight">
        We Keep the Water Flowing and the Heat Glowing
      </h1>
      <h2 class="text-[16px] md:text-[20px] w-full md:w-[607px] text-center md:text-left font-sans">
        We're your friendly neighborhood plumbers, ready to tackle any leak, drip, or clog with a smile
      </h2>
      <div class="flex justify-center md:justify-start">
        <button class="w-[150px] h-[50px] md:w-[190px] md:h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/header-img.png'),
        require('@/assets/header-img2.png')
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    this.startImageSlideshow();
  },
  methods: {
    startImageSlideshow() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000);
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
