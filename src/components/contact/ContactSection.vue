<template>
    <div class="w-full h-[788px] rounded mt-18 p-12"  style="">
        <div class=" flex space-x-5 justify-center items-center">
            <hr class="w-[50px] border-t-[3px] border-gray-400 mr-4">
            <h1 class="font-extrabold text-[32px]">CONTACT US</h1>
            <hr class="w-[50px] border-t-[3px] border-gray-400 mr-4">
        </div>
        <div class="flex mt-16  justify-center ">
            <div class="space-y-5">
                <p class="text-[16px] w-[521px] text-left font-nunito">If you have any questions or comments about our services, contact us using the form and we will surely get back to you.</p>

                <div class="space-y-5">
                    <div class="text-left flex items-center space-x-5">
                        <img src="@/assets/Phone.png" alt="Phone icon" class="h-6">
                        <div class="text-sm">+1 (587) 879 4211</div>
                    </div>                    
                    <div class="text-left flex items-center space-x-5">
                        <img src="@/assets/Email.png" alt="Phone icon" class="h-6">
                        <div class="text-sm">zyonsplumbingnheating@gmail.com</div>
                    </div>
                    <div class="text-left flex items-center space-x-5">
                        <img src="@/assets/Location.png" alt="Phone icon" class="h-6">
                        <div class="text-sm"> 8920 100st nw  Edmonton Alberta.</div>
                    </div>
                </div>  
                <p class="text-[16px] w-[5] text-left font-nunito">MON - SAT : 8 AM - 6 PM, SUN (Closed)</p>
                <div class="text-left flex items-center space-x-5">
                    <img src="@/assets/Phone.png" alt="Phone icon" class="h-6">

                    <img src="@/assets/Email.png" alt="Phone icon" class="h-6">

                    <img src="@/assets/Location.png" alt="Phone icon" class="h-6">
                </div>  
            </div>
            <ContactForm />
        </div>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

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
