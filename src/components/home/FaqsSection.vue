<template>
  <div class="w-full h-auto rounded mt-[70px] md:mt-32 lg:mt-18 py-24 bg-white px-12 md:px-36">
    <div class="relative -left-10">
      <div class="absolute w-[3] h-[150px] -top-24">
        <img v-lazy="require('@/assets/Question-Mark.png')" alt="Question Mark Image" class="w-full h-full rounded-[10px] object-cover">
      </div>
    </div>

    <div class="flex space-x-5 items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
      <h1 class="font-extrabold text-[32px] text-foundationGreyDarker">FAQs</h1>
    </div>

    <div v-for="(faq, index) in faqs" :key="index" class="w-full my-2 md:my-8">
      <div @click="toggleFaq(index)" class="w-full h-[65px] mb-6 px-4 md:px-8 flex justify-between items-center rounded bg-foundationGreyLight cursor-pointer">
        <p class="text-[14px] md:text-[16px] font-semibold text-foundationGreyDarker text-left">{{ faq.question }}</p>
        <img v-lazy="faq.icon" :class="{'rotate-90': faq.open, 'rotate-0': !faq.open}" class="h-8 transition-transform duration-200">
      </div>
      <div v-if="faq.open" class="w-full rounded px-4 md:px-8 py-4 bg-fountActive">
        <p class="text-[14px] md:text-[16px] text-left font-semibold mb-8">{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronRightIcon from '@/assets/chevron-circle.svg';

export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          question: "Do you offer emergency plumbing services?",
          answer: "Yes, Zyons Plumbing and Heating understands that plumbing emergencies can happen at any time.  We offer 24/7 emergency plumbing services to address urgent issues like burst pipes or sewer line backups. Don't hesitate to call us day or night for immediate assistance.",
          open: false,
          icon: ChevronRightIcon
        },
        {
          question: "What are your qualifications and certifications?",
          answer: "At Zyons Plumbing and Heating, we take pride in our team of licensed, insured, and highly qualified plumbers.  All our technicians undergo rigorous training and stay up-to-date on the latest plumbing codes and technologies.  We can provide you with copies of our licenses and certifications upon request.",
          open: false,
          icon: ChevronRightIcon
        },
        {
          question: "What types of water heaters do you service?",
          answer: "Zyons Plumbing & Heating services all types of water heaters, including traditional tank water heaters, tankless (on-demand) water heaters, heat pump water heaters, and solar water heaters. Our technicians are experienced in repairing, maintaining, and installing various models to ensure you have reliable hot water.",
          open: false,
          icon: ChevronRightIcon
        },
        {
          question: "How do I schedule a service appointment with Zyons Plumbing & Heating?",
          answer: "Scheduling a service appointment with Zyons Plumbing & Heating is easy. You can call us at +1 (587) 879 4211,  email us at zyonsplumbingnheating@gmail.com, or fill out the contact form on our website. Our friendly team will assist you in setting up a convenient time for your service.",
          open: false,
          icon: ChevronRightIcon
        }
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs.forEach((faq, i) => {
        if (i !== index) {
          faq.open = false;
        }
      });
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-90 {
  transform: rotate(90deg);
}
.bg-foundationGreyLightActive {
  background-color: #f0f0f0;
}
</style>
