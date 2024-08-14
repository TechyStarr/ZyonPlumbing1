<template>
  <div class="w-full mt-4 lg:mt-18 bg-foundationGoldDarker px-6 md:px-16 lg:px-20 py-8">
    <div class="flex flex-col lg:flex-row justify-between space-y-5 md:space-y-0 lg:space-y-0 xl:space-y-0">
      <div>
        <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-24 mr-3">
        <p class="font-nunito text-[#FFFFFF] text-left w-[294px] md:w-[386px]">
          Zyons Plumbing & Heating is your trusted partner for top-quality plumbing and heating services. With a commitment to excellence and customer satisfaction, we ensure your home remains comfortable and efficient. Contact us for reliable, professional solutions.
        </p>
        <div class="text-left flex items-center space-x-5 mt-6">
          <a href="https://www.facebook.com/profile.php?id=61563833889325&mibextid=ZbWKwL" target="_blank">
            <img src="@/assets/Facebook-w.svg" alt="Facebook Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <a href="http://instagram.com/zyonsplumbingandheating" target="_blank">
            <img src="@/assets/Instagram-w.svg" alt="Instagram Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <a href="https://www.linkedin.com/company/zyon-s-plumbing-and-heating/" target="_blank">
            <img src="@/assets/LinkedIn2-w.svg" alt="LinkedIn Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
        </div>
      </div>
      <div class="space-y-5 lg:space-y-0 pt-6 lg:pt-20">
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
      <div class="space-y-5 lg:space-y-0 pt-6 lg:pt-20">
        <h1 class="font-bold text-[#FFFFFF] text-base text-left">QUICK LINKS</h1>
        <div class="space-y-4">
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
  name: 'FooterSection',
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
