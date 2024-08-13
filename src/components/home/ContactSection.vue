<template>
  <div id="contact" class="overflow-hidden w-full h-auto rounded mt-1 my-6 md:my-0 py-10 md:py-24 px-4 md:px-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
      <h1 class="font-extrabold text-[18px] md:text-[32px] text-foundationGreyDarker">GET IN TOUCH</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
    </div>
    <div class="flex flex-col md:flex-row justify-between mx-4 md:mx-20 space-y-12">
      <div class="space-y-8">
        <p class="text-[16px] md:text-[20px] mt-10 w-[326px] md:w-[521px] text-center md:text-left text-foundationGreyDarker">If you have any questions or comments about our services, contact us using the form and we will surely get back to you.</p>

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
          <!-- Facebook Icon -->
          <a href="https://www.facebook.com/profile.php?id=61563833889325&mibextid=ZbWKwL" target="_blank">
            <img src="@/assets/Facebook-b.svg" alt="Facebook Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <!-- Instagram Icon -->
          <a href="Instagram.com/zyonsplumbingandheating" target="_blank">
            <img src="@/assets/Instagram-b.svg" alt="Instagram Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
          <!-- LinkedIn Icon -->
          <a href="https://www.linkedin.com/company/zyon-s-plumbing-and-heating/" target="_blank">
            <img src="@/assets/LinkedIn2-b.svg" alt="LinkedIn Logo" class="h-5 md:h-[30px] cursor-pointer">
          </a>
        </div>
      </div>
      <ContactForm />
    </div>
    <div class="relative hidden md:block md:-left-12">
      <div class="absolute w-[3] h-[150px] -top-16">
        <img v-lazy="require('@/assets/tools-icon.png')" alt="Tools Icon" class="w-full h-full rounded-[10px] object-cover">
      </div>
    </div>
    <div class="relative md:hidden" style="height: 20px;">
      <div class="absolute right-[-260px] -top-12 w-[460px]">
        <img v-lazy="require('@/assets/tool-2.png')" alt="Tool Image" class="w-full h-full object-cover rounded-[10px]">
      </div>
    </div>
    <!-- <div class="relative md:hidden right-0">
      <div class="absolute w-[3] h-[150px] top-2">
        <img v-lazy="require('@/assets/tool-2.png')" alt="Tool Image" class="rounded-[10px] object-cover">
      </div>
    </div> -->
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'AboutUsSection',
  components: {
    ContactForm
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
