<template>
    <div class="w-full h-[788] rounded mt-18 p-12" style="">
      <div class="flex space-x-5 justify-center items-center">
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
        <h1 class="font-extrabold text-[18px] md:text-[32px]">CONTACT US</h1>
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      </div>
      <div class="md:flex mt-4 md:mt-16 justify-center">
        <div class="space-y-5">
          <p class="text-[16px] w-[314px] md:w-[521px] text-center md:text-left font-nunito">
            If you have any questions or comments about our services, contact us using the form and we will surely get back to you.
          </p>
          <div class="space-y-5">
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Phone.png')" alt="Phone icon" class="h-6">
              <div class="text-sm">+1 (825) 975 2906</div>
            </div>
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Email.png')" alt="Phone icon" class="h-6">
              <div class="text-sm">zyonsplumbingnheating@gmail.com</div>
            </div>
            <div class="text-left flex items-center space-x-5">
              <img v-lazy="require('@/assets/Location.png')" alt="Phone icon" class="h-6">
              <div class="text-sm">8920 100st nw Edmonton Alberta.</div>
            </div>
          </div>
          <p class="text-[14px] md:text-[16px] w-[5] text-center md:text-left font-nunito font-bold">
            MON - SAT : 8 AM - 6 PM, SUN (Closed)
          </p>
          <div class="text-left flex justify-center md:justify-start items-center space-x-5">
            <img v-lazy="require('@/assets/Facebook-Circled.svg')" alt="Facebook icon" class="h-6 svg-black">
            <img v-lazy="require('@/assets/Instagram-2.svg')" alt="Instagram icon" class="h-6">
            <img v-lazy="require('@/assets/LinkedIn.svg')" alt="LinkedIn icon" class="h-6">
          </div>
        </div>
        <div class="mt-[72px]">
          <ContactForm />
        </div>
      </div>
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
  