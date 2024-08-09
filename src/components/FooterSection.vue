<template>
    <div class="w-full mt-18 bg-foundationGoldDarker px-12 md:px-24 py-8" space-y-6>
      <div class="md:flex justify-between space-y-5">
        <div>
          <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-24 mr-3">
          <p class="font-nunito text-[#FFFFFF] text-left w-[294px] md:w-[386px]">
            Zyons Plumbing & Heating is your trusted partner for top-quality plumbing and heating services. With a commitment to excellence and customer satisfaction, we ensure your home remains comfortable and efficient. Contact us for reliable, professional solutions.
          </p>
          <div class="text-left flex items-center space-x-5 mt-6">
            <!-- <img v-lazy="require('@/assets/Phone.svg')" alt="Phone icon" class="h-6 icon-hover">
            <img v-lazy="require('@/assets/Email.svg')" alt="Email icon" class="h-6 icon-hover">
            <img v-lazy="require('@/assets/Location.svg')" alt="Location icon" class="h-6 icon-hover"> -->
            <img v-lazy="require('@/assets/Facebook-w.svg')" alt="Facebook icon" class="h-6 svg-black icon-hover">
            <img v-lazy="require('@/assets/Instagram-w.svg')" alt="Instagram icon" class="h-6 icon-hover">
            <img v-lazy="require('@/assets/LinkedIn2-w.svg')" alt="LinkedIn icon" class="h-6 icon-hover">
          </div>
        </div>
        <div class="space-y-5 pt-6 md:pt-20">
          <h1 class="font-bold text-[#FFFFFF] text-base text-left">CONTACT US</h1>
          <div class="space-y-2">
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Phone.svg')" alt="Phone icon" class="h-6 icon-hover">
              <a href="tel:+18259752906" class="text-sm text-[#FFFFFF]">+1 (825) 975 2906</a>
            </div>
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Email.svg')" alt="Email icon" class="h-6 icon-hover">
              <a href="mailto:zyonsplumbingnheating@gmail.com" class="text-sm text-[#FFFFFF]">zyonsplumbingnheating@gmail.com</a>
            </div>
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Location.svg')" alt="Location icon" class="h-6 icon-hover">
              <a href="https://www.google.com/maps/search/?api=1&query=8920+100+St+NW,+Edmonton,+Alberta" class="text-sm text-[#FFFFFF]" target="_blank">8920 100st nw Edmonton Alberta</a>
            </div>
          </div>
        </div>
        <div class="space-y-5 pt-6 md:pt-20">
          <h1 class="font-bold text-[#FFFFFF] text-base text-left">QUICK LINKS</h1>
          <div class="space-y-2">

            <router-link to="/"><p class="text-sm text-left text-[#FFFFFF] hover-text-red">Home</p></router-link>
            <router-link to="/about"><p class="text-sm text-left text-[#FFFFFF] hover-text-red">About</p></router-link>
            <router-link to="/services"><p class="text-sm text-left text-[#FFFFFF] hover-text-red">Services</p></router-link>
            <router-link to="/blog"><p class="text-sm text-left text-[#FFFFFF] hover-text-red">Blog</p></router-link>
          </div>
        </div>
      </div>
      <hr class="w-full border-t-[1px] border-gray-100 mt-5">
      <p class="text-white mt-5">Copyright © Zyon Plumbing & Heating 2024. All rights reserved.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUsSection',
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  a:hover, .hover-text-red:hover {
    color: #BA8C2A; /* red color for hover */
  }
  
  .icon-hover {
    transition: filter 0.3s;
  }
  
  .icon-hover:hover {
    filter: invert(28%) sepia(86%) saturate(4673%) hue-rotate(352deg) brightness(100%) contrast(100%);
  }
  </style>
  