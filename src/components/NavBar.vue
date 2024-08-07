<template>
  <div>
    <!-- Top Navbar with logo and phone numbers -->
    <nav class="bg-white border-b border-gray-300 px-4 md:px-24 py-4 flex justify-between items-center font-sans relative fixed top-0 left-0 w-full z-50">
      <div class="flex items-center">
        <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-16 md:h-24 mr-3">
      </div>
      <div class="hidden md:flex space-x-8">
        <!-- Email group -->
        <div class="flex items-center space-x-3 md:space-x-5">
          <img v-lazy="require('@/assets/envelope-dots.png')" alt="Email Icon" class="h-8 md:h-12">
          <div class="text-left">
            <div class="font-bold text-sm md:text-base">EMAIL US</div>
            <div class="text-xs md:text-sm">
              <a href="mailto:zyonsplumbingnheating@gmail.com" class="text-black no-underline">zyonsplumbingnheating@gmail.com</a>
            </div>
          </div>
        </div>
        <!-- Phone number group -->
        <div class="flex items-center space-x-3 md:space-x-5">
          <img v-lazy="require('@/assets/hotline.png')" alt="Phone icon" class="h-8 md:h-11">
          <div class="text-left">
            <div class="font-bold text-sm md:text-base">CALL US</div>
            <div class="text-xs md:text-sm">
              <a href="tel:1234567890" class="text-black no-underline">(123) 456-7890</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none relative z-50">
          <img v-if="!menuOpen" v-lazy="require('@/assets/hamburger-icon.svg')" alt="Menu Icon" class="h-8">
          <img v-else v-lazy="require('@/assets/x-close.svg')" alt="Close Icon" class="h-8">
        </button>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="menuOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 flex justify-start">
        <div class="bg-white w-64 h-full p-6">
          <div class="flex justify-between items-center mb-8">
            <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-16">
            <button @click="toggleMenu" class="focus:outline-none absolute right-4 top-4 z-50">
              <!-- <img v-lazy="require('@/assets/x-close.svg')" alt="Close Icon" class="h-8"> -->
            </button>
          </div>
          <ul class="space-y-6">
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/" active-class="bg-foundationGreyDarker text-white">Home</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/about" active-class="bg-foundationGreyDarker text-white">About</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/services" active-class="bg-foundationGreyDarker text-white">Services</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/blog" active-class="bg-foundationGreyDarker text-white">Blog</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/contact" active-class="bg-foundationGreyDarker text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- Navigation Links for Desktop -->
    <nav class="hidden md:block bg-customGold px-40 py-6 mt-[88px] md:mt-0">
      <ul class="flex justify-center font-md text-base">
        <li>
          <router-link class="nav-link text-black no-underline px-10 py-6 border-r border-black hover:bg-black hover:text-white font-sans" to="/" active-class="bg-foundationGreyDarker text-white">Home</router-link>
        </li>
        <li>
          <router-link class="nav-link text-black no-underline px-10 py-6 border-r border-black hover:bg-black hover:text-white font-sans" to="/about" active-class="bg-foundationGreyDarker text-white">About</router-link>
        </li>
        <li>
          <router-link class="nav-link text-black no-underline px-10 py-6 border-r border-black hover:bg-black hover:text-white font-sans" to="/services" active-class="bg-foundationGreyDarker text-white">Services</router-link>
        </li>
        <li>
          <router-link class="nav-link text-black no-underline px-10 py-6 border-r border-black hover:bg-black hover:text-white font-sans" to="/blog" active-class="bg-foundationGreyDarker text-white">Blog</router-link>
        </li>
        <li>
          <router-link class="nav-link text-black no-underline px-10 py-6 border-r border-black hover:bg-black hover:text-white font-sans" to="/contact" active-class="bg-foundationGreyDarker text-white">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
.nav2 {
  background-color: #BA8C2A;
}
.nav-link {
  background-color: #BA8C2A;
  padding-top: 26.5px;
  padding-bottom: 27px;
}
.bg-foundationDarker {
  background-color: #41310F;
}
.bg-foundationGreyDarker {
  background-color: #333333;
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
