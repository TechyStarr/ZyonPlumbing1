<template>
  <div class="w-full h-auto rounded mt-1 px- py-6 md:p-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
      <h1 class="font-extrabold text-[18px] md:text-[32px] text-foundationGreyDarker">GET IN TOUCH</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
    </div>
    <div class="flex flex-col md:flex-row mt-8 justify-between mx-8 md:mx-20 space-y-12">
      <div class="space-y-8">
        <p class="text-[16px] md:text-[20px] w-full md:w-[521px] text-left text-foundationGreyDarker">If you have any questions or comments about our services, contact us using the form and we will surely get back to you.</p>

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
        <p class="text-[16px] text-left font-nunito hidden md:block">MON - SAT : 8 AM - 6 PM, SUN (Closed)</p>
        <div class="text-left flex items-center space-x-5 hidden md:flex">
          <img v-lazy="require('@/assets/Phone.png')" alt="Phone icon" class="h-6">
          <img v-lazy="require('@/assets/Email.png')" alt="Phone icon" class="h-6">
          <img v-lazy="require('@/assets/Location.png')" alt="Phone icon" class="h-6">
        </div>
      </div>
      <ContactForm />
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
