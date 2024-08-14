<template>
  <div class="header-container relative z-20 lg:mt-header-margin">
    <div class="image-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :class="['w-full h-[692px] md:h-[843px] object-cover', { 'fade-image': currentIndex === index }]"
        alt="Header Image"
      />
    </div>
    <div class="text-container absolute top-48 md:top-40 left-4 xl:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
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
.header-container {
  z-index: 20; /* Higher than AboutUsSection */
  position: relative; /* Ensure z-index takes effect */
}

.image-container {
  position: relative;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

.image-container img.fade-image {
  opacity: 1;
}

.text-container {
  position: relative;
  z-index: 30; /* Ensure text is above images */
}
</style>
