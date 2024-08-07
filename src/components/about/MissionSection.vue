<template>
  <div class="w-full space-y-12 bg-foundationGoldLightActive mt-[70px] md:mt-[170px] px-4 md:px-12 py-12 md:p-12">
    <div class="space-y-6">
      <div class="flex space-x-5 items-center">
        <hr class="w-[50px] border-t-[3px] border-gray-400">
        <h1 class="font-extrabold text-[18px] md:text-[32px]">MISSION STATEMENT</h1>
      </div>
      <p class="font-nunito text-left w-full md:w-[1227px]">
        At Zyon Plumbing & Heating, our mission is simple: to provide top-quality plumbing and heating services with a personal touch. 
        We strive to ensure every home and business in our community stays comfortable, safe, and efficient. Through our commitment to excellence, integrity, and customer satisfaction, we aim to build lasting relationships and make a positive impact on the lives of those we serve. Your comfort is our priority, and we’re here to help, one pipe and pump at a time.
      </p>
    </div>

    <div class="space-y-6">
      <div class="flex space-x-5 items-center">
        <hr class="w-[50px] border-t-[3px] border-gray-400">
        <h1 class="font-extrabold text-[18px] md:text-[32px]">WHY CHOOSE US</h1>
      </div>
      <div class="font-nunito text-left w-full md:w-[1227px]">
        <ul class="list-disc pl-5 space-y-2">
          <li>
            <strong>Building Trust:</strong> We know plumbing problems can be stressful. That's why clear communication and honest advice are at the core of everything we do. We'll explain the issue in plain English and discuss all your options before we start any work.
          </li>
          <li>
            <strong>Going the Extra Mile:</strong> We treat your home like our own. We show up on time, respect your property, and leave the workspace clean. We also believe in building relationships, not just fixing pipes.
          </li>
          <li>
            <strong>Exceeding Expectations:</strong> We're passionate about exceeding expectations. Our team of skilled and friendly technicians is constantly learning and improving to ensure we provide the best possible service.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionSection',
  created() {
    console.log('MissionSection.vue created');
  },
  mounted() {
    console.log('MissionSection.vue mounted');
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
