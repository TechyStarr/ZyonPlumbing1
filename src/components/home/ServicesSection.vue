<template>
    <div class="w-full h-[788p] rounded mt-16 lg:mt-40 bg-foundationGreyLight py-12 px-8 md:px-[50px]">
      <div class="flex space-x-5 justify-center items-center">
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
        <h1 class="font-extrabold text-[18px] md:text-[30px] lg:text-[32px]">OUR SERVICES</h1>
        <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          ref="serviceCard"
          class="justify-center items-center align-center w-295 h-[254px] rounded-[10px] mt-12 bg-0 space-y-2 flex flex-col border border-foundationGoldNormal"
        >
          <img :src="service.image" alt="Service Icon" class="h-8">
          <router-link
            :to="service.link"
            class="font-extrabold text-[18px] text-center hover:text-customGold text-foundationGreyDarker"
            >{{ service.title }}</router-link
          >
          <p class="text-[16px] w-[224px] text-center font-nunito text-foundationGreyDarkActive">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'AboutUsSection',
  data() {
    return {
      services: [
        {
          image: require('@/assets/Plumbing.png'),
          title: 'Residential and Commercial Plumbing',
          link: '/services',
          description: 'Top-quality plumbing services for homes and businesses. Dependable, efficient, and professional.',
        },
        {
          image: require('@/assets/Water-Heater.png'),
          title: 'Water heater repair & replacement',
          link: '/services',
          description: 'Expert repair and replacement of water heaters to keep your home warm and comfortable.',
        },
        {
          image: require('@/assets/Tools.png'),
          title: 'Repiping Services',
          link: '/services',
          description: 'Replace old pipes with durable, high-quality materials for better water flow and reliability.',
        },
        {
          image: require('@/assets/Water-Tap.png'),
          title: 'Faucet Repair & Replacement',
          link: '/services',
          description: 'Repair and replace faucets and fixtures for enhanced functionality and style in your home.',
        },
        {
          image: require('@/assets/Gas-Burner.png'),
          title: 'Gas Line Services',
          link: '/services',
          description: 'Comprehensive gas line installation, repair, and maintenance by certified professionals.',
        },
        {
          image: require('@/assets/Heating.png'),
          title: 'Hydronic Heating & Services',
          link: '/services',
          description: 'Installation, repair, and maintenance of energy-efficient hydronic heating systems for consistent warmth.',
        },
        {
          image: require('@/assets/Pump.png'),
          title: 'Pump Services',
          link: '/services',
          description: 'Professional installation, repair, and maintenance of sump pumps, well pumps, and more.',
        },
        {
          image: require('@/assets/Water-Pipe.png'),
          title: 'Sewer & Drain Pipe Repair & Replacement',
          link: '/services',
          description: 'Expert repair and replacement of sewer and drain pipes to prevent clogs and ensure smooth operation.',
        },
        
        // Add more services as needed
      ]
    };
  },
  mounted() {
    const firstRowCards = this.$refs.serviceCard.slice(0, 4); // Select the first 4 cards (first row)

    gsap.from(firstRowCards, {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1, // A little stagger for a nicer effect
      scrollTrigger: {
        trigger: firstRowCards[0], // Trigger animation when the first card in the row comes into view
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate remaining cards individually
    this.$refs.serviceCard.slice(4).forEach((card) => {
      gsap.from(card, {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>

