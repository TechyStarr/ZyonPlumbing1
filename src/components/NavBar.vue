<template>
  <div>
    <nav class="fixed w-full top-0 left-0 z-50 overflow-x-hidden">
      <!-- Top Navbar Section -->
      <div class="bg-white border-b border-gray-300 px-4 lg:px-24 py-2 md:py-2 flex justify-between items-center font-sans">
        <div class="flex items-center">
          <router-link to="/" @click="handleLogoClick">
            <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-10 md:h-16 mr-3">
          </router-link>
        </div>
        <div class="hidden lg:flex space-x-8">
          <div class="flex items-center space-x-3 md:space-x-5">
            <img v-lazy="require('@/assets/envelope-dots.png')" alt="Email Icon" class="h-8 md:h-10">
            <div class="text-left">
              <div class="font-bold text-sm md:text-base">EMAIL US</div>
              <div class="text-xs md:text-sm">
                <a href="mailto:zyonsplumbingnheating@gmail.com" class="text-black no-underline">zyonsplumbingnheating@gmail.com</a>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3 md:space-x-5">
            <img v-lazy="require('@/assets/hotline.png')" alt="Phone icon" class="h-8 md:h-10">
            <div class="text-left">
              <div class="font-bold text-sm md:text-base">CALL US</div>
              <div class="text-xs md:text-sm">
                <a href="tel:+18259752906" class="text-black no-underline">+1 (825) 975 2906</a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex lg:hidden items-center">
          <button @click="toggleMenu" class="focus:outline-none">
            <img v-if="!menuOpen" v-lazy="require('@/assets/hamburger-icon.svg')" alt="Menu Icon" class="h-8">
            <img v-else v-lazy="require('@/assets/x-close.svg')" alt="Close Icon" class="hidden h-8">
          </button>
        </div>        
      </div>

      <!-- Bottom Navbar Section for Desktop -->
      <div class="hidden lg:block bg-customGold px-4 md:px-40 py-[22px]">
        <ul class="flex justify-center font-md text-base">
          <li>
            <router-link class="nav-link text-black no-underline px-4 md:px-10 py-[24.5px] border-r border-black hover:bg-black hover:text-white font-sans" to="/" active-class="bg-foundationGreyDarker text-white">Home</router-link>
          </li>
          <li>
            <router-link class="nav-link text-black no-underline px-4 md:px-10 py-[24.5px] border-r border-black hover:bg-black hover:text-white font-sans" to="/about" active-class="bg-foundationGreyDarker text-white">About</router-link>
          </li>
          <li>
            <router-link class="nav-link text-black no-underline px-4 md:px-10 py-[24.5px] border-r border-black hover:bg-black hover:text-white font-sans" to="/services" active-class="bg-foundationGreyDarker text-white">Services</router-link>
          </li>
          <li>
            <router-link :class="{'bg-foundationGreyDarker text-white': isBlogActive}" class="nav-link text-black no-underline px-4 md:px-10 py-[24.5px] border-r border-black hover:bg-black hover:text-white font-sans" to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link class="nav-link text-black no-underline px-4 md:px-10 py-[24.5px] hover:bg-black hover:text-white font-sans" to="/contact" active-class="bg-foundationGreyDarker text-white">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <div v-if="menuOpen" class="lg:block fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-start overflow-x-hidden">
        <div class="bg-white w-64 h-full p-6 overflow-x-hidden">
          <div class="flex justify-between items-center mb-8">
            <router-link to="/" @click="handleLogoClick">
              <img v-lazy="require('@/assets/logo.png')" alt="Company Logo" class="h-16">
            </router-link>
            <button @click="toggleMenu" class="focus:outline-none absolute right-4 top-4 z-50">
              <img v-lazy="require('@/assets/x-close.svg')" alt="Close Icon" class="h-8">
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
              <router-link @click="toggleMenu" :class="{'bg-foundationGreyDarker text-white': isBlogActive}" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link @click="toggleMenu" class="block text-black no-underline px-4 py-2 hover:bg-black hover:text-white font-sans" to="/contact" active-class="bg-foundationGreyDarker text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
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
  computed: {
    isBlogActive() {
      return this.$route.path.startsWith('/blog');
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleLogoClick() {
      this.$router.push('/').catch(() => {});
    }
  }
}
</script>


<style scoped>
html, body {
  overflow-x: hidden;
}

.nav-link {
  background-color: #BA8C2A;
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
