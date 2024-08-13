<template>
  <div ref="contactSection" class="w-full h-auto rounded mt-1 my-36 md:my-0 py-10 md:py-24 px-4 md:px-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      <h1 class="font-extrabold text-[18px] md:text-[32px]">CONTACT US</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
    </div>

    <div class="flex flex-col md:flex-row justify-between mx-4 md:mx-20 space-y-12">
      <div ref="contactText" class="space-y-8">
        <p class="text-[16px] md:text-[20px] mt-10 w-[326px] md:w-[521px] text-center md:text-left text-foundationGreyDarker">
          If you have any questions or comments about our services, contact us using the form and we will surely get back to you.
        </p>

        <div class="space-y-5 hidden md:block">
          <div class="text-left flex items-center space-x-5">
            <img v-lazy="require('@/assets/Phone.png')" alt="Phone icon" class="h-6">
            <div class="text-sm text-foundationGreyDarker">+1 (825) 975 2906</div>
          </div>
          <div class="text-left flex items-center space-x-5">
            <img v-lazy="require('@/assets/Email.png')" alt="Phone icon" class="h-6">
            <div class="text-sm text-foundationGreyDarker">zyonsplumbingnheating@gmail.com</div>
          </div>
          <div class="text-left flex items-center space-x-5">
            <img v-lazy="require('@/assets/Location.png')" alt="Phone icon" class="h-6">
            <div class="text-sm text-foundationGreyDarker">8920 100st nw Edmonton Alberta.</div>
          </div>
        </div>
        <p class="text-[16px] text-left font-nunito hidden md:block">MON - FRI : 8 AM - 4 PM, SUN - SAT (Closed)</p>
        <div class="text-left flex items-center space-x-5 hidden md:flex">
          <!-- Social Media Icons -->
          <a href="https://www.facebook.com/profile.php?id=61563833889325&mibextid=ZbWKwL" target="_blank">
            <img src="@/assets/Facebook-b.svg" alt="Facebook Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <a href="http://instagram.com/zyonsplumbingandheating" target="_blank">
            <img src="@/assets/Instagram-b.svg" alt="Instagram Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <a href="https://www.linkedin.com/company/zyon-s-plumbing-and-heating/" target="_blank">
            <img src="@/assets/LinkedIn2-b.svg" alt="LinkedIn Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
        </div>
      </div>
      <ContactForm ref="contactForm" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from '@/components/ContactForm.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ContactSection',
  components: {
    ContactForm
  },
  mounted() {
    gsap.from(this.$refs.contactText, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: this.$refs.contactSection,
        start: "top 80%",
      }
    });

    gsap.from(this.$refs.contactForm.$el, {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: this.$refs.contactSection,
        start: "top 80%",
      }
    });
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
