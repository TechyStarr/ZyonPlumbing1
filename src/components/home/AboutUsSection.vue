<template>
  <div class="w-full px-4 md:py-12">
    <div class="flex flex-col md:flex-row justify-between px-4 md:px-0 lg:px-24 relative">
      <div class="relative left- justify-star -left-10 md:left-16 lg:left-0 flex justify-center lg:justify-start">
        <div class="absolute w-[221px] md:w-[280px] lg:w-[411px] h-[200px] md:h-[244px] lg:h-[284px] pt-16">
          <img src="@/assets/header-img.png" alt="Header Image" class="w-full h-full rounded-[10px] object-cover">
        </div>
        <div class="relative w-[176px] md:w-[200px] lg:w-[297px] h-[233px] md:h-[337px] lg:h-[477px] bg-0 border-[15px] border-foundationGoldNormal rounded-[10px] left-16 md:left-28 lg:left-40 top-28 md:top-36 lg:top-40"></div>
        <div class="absolute rounded-[10px] top-[132px] md:top-[180px] lg:top-48 left-[210px] md:left-[150px] lg:left-48 w-[199px] md:w-[220px] lg:w-[331px] h-[261px] md:h-[344px] lg:h-[477px]">
          <img src="@/assets/image3.png" alt="Overlay Image" class="w-full h-full object-cover rounded-[10px]">
        </div>
      </div>

      <div class="mt-48 md:mt-16 lg:mt-0 lg:mr-">
        <div class="flex space-x-5 items-center pb-4">
          <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
          <h1 class="font-extrabold text-[32px] foundationGreyDarker">ABOUT US</h1>
        </div>
        <div class="pb-5">
          <p class="font-nunito text-left w-full md:w-[444px] lg:w-[544px] text-foundationGreyDarkActive">
            Zyons Plumbing and Heating is your trusted partner for all things plumbing and heating. Founded on the principles of integrity and excellence, we have been serving the community for over a decade. 
            Our certified technicians are passionate about what they do and committed to delivering the best service every time. We provide a wide range of services for both residential and commercial clients.
          </p>

          <p class="font-nunito text-left w-full md:w-[444px] lg:w-[544px] text-foundationGreyDarkActive pt-8">
            At Zyons, we offer top-notch plumbing and heating services to keep your home comfortable and running smoothly. Whether it's a leaky faucet or a full heating system installation, our skilled team is ready to help. Reliable, friendly, and always professional – that's the Zyons promise.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 font-nunito">
          <div class="flex items-center space-x-2">
            <img src="@/assets/check-square.png" alt="Check square" class="h-6">
            <p>Qualified Team</p>
          </div>
          <div class="flex items-center space-x-2">
            <img src="@/assets/check-square.png" alt="Check square" class="h-6">
            <p>Affordable Pricing</p>
          </div>
          <div class="flex items-center space-x-2">
            <img src="@/assets/check-square.png" alt="Check square" class="h-6">
            <p>Plumbing Experts</p>
          </div>
          <div class="flex items-center space-x-2">
            <img src="@/assets/check-square.png" alt="Check square" class="h-6">
            <p>Quick Service</p>
          </div>
          <div class="flex justify-center md:justify-start lg:justify-start mt-4 lg:mt-0">
            <button class="w-[150px] md:w-[170px] lg:w-[190px] h-[50px] md:h-[55px] lg:h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsSection',
};
</script>

<style scoped>
/* Add any necessary styles here */
.bg-customGold {
  background-color: #BA8C2A;
}
</style>
