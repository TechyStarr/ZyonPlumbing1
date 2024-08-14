<template>
  <div>
    <div v-for="(section, index) in sections" :key="index" ref="sections" class="flex flex-col xl:flex-row justify-between items-center mb-8 xl:mb-[70px] px-4 xl:px-32">
      <h1 class="text-[64px] text-[#E9E0CC] mt- xl:mt-0 xl:order-1 font-extrabold leading-tight text-center w-full xl:w-auto">
        {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
      </h1>
      <div class="space-y-2 flex flex-col items-center xl:items-start xl:order-2 w-full xl:w-auto">
        <img v-lazy="section.icon" alt="Check square" class="mx-auto xl:ml-32 h-8">
        <p class="font-extrabold text-[18px] text-center xl:text-left">{{ section.title }}</p>
        <p class="text-[16px] w-full md:w-[489px] text-center xl:text-left font-nunito">{{ section.description }}</p>
      </div>
      <img v-lazy="section.image" alt="Check square" class="w-full xl:w-[423px] h-[265px] rounded xl:order-3 mt-4 xl:mt-0">
    </div>
    <button class="w-[190px] h-[60px] mb-[70px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full mx-auto block">
      Contact Us
    </button>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ServicesSection',
  data() {
    return {
      sections: [
        {
          icon: require('@/assets/Plumbing.png'),
          title: 'Residential and Commercial Plumbing',
          description: 'Whether it’s a small home repair or a large commercial project, we offer reliable plumbing services tailored to your needs. Our team handles everything from leaky faucets to complete plumbing installations with precision and efficiency.',
          image: require('@/assets/image18.svg')
        },
        {
          icon: require('@/assets/Water-Heater.png'),
          title: 'Water heater repair & replacement',
          description: 'Stay Warm with Our Water Heater Services. No hot water? No problem. We specialize in the repair and replacement of all types of water heaters. Our experts quickly diagnose issues and provide effective solutions to restore your hot water supply.',
          image: require('@/assets/image18-1.svg')
        },
        {
          icon: require('@/assets/Tools.png'),
          title: 'Repiping Services',
          description: 'Old or damaged pipes can cause numerous problems. Our repiping services replace outdated plumbing with durable, high-quality materials, ensuring better water flow and reliability throughout your property.',
          image: require('@/assets/image18-2.svg')
        },
        {
          icon: require('@/assets/Water-Tap.png'),
          title: 'Faucet Repair & Replacement',
          description: 'From dripping faucets to broken fixtures, we offer repair and replacement services that improve the functionality and appearance of your kitchen and bathrooms. We work with a wide range of styles and brands to match your preferences.',
          image: require('@/assets/image18-3.svg')
        },
        {
          icon: require('@/assets/Gas-Burner.png'),
          title: 'Gas line Services',
          description: 'Our certified professionals provide comprehensive gas line services, including installation, repair, and maintenance. We ensure your gas lines are safe and compliant with all regulations, giving you peace of mind.',
          image: require('@/assets/image18-4.svg')
        },
        {
          icon: require('@/assets/Heating.png'),
          title: 'Hydronic Heating Services',
          description: 'Experience the comfort and efficiency of hydronic heating. We offer installation, repair, and maintenance services for hydronic heating systems, providing a reliable and cost-effective way to heat your home.',
          image: require('@/assets/image18-5.svg')
        },
        {
          icon: require('@/assets/Pump.png'),
          title: 'Pump Services',
          description: 'Whether you need a sump pump, well pump, or any other type of pump, our expert technicians provide professional installation, repair, and maintenance services to keep your systems running smoothly.',
          image: require('@/assets/image18-6.svg')
        },
        {
          icon: require('@/assets/Water-Pipe.png'),
          title: 'Sewer & Drain Pipe Repair & Replacement',
          description: 'Clogged or damaged sewer and drain pipes can cause major disruptions. Our team provides thorough repair and replacement services, resolving issues quickly and preventing future problems.',
          image: require('@/assets/image18-7.svg')
        }
      ]
    };
  },
  mounted() {
    const sections = this.$refs.sections;

    // Ensure sections is an array
    if (Array.isArray(sections)) {
      sections.forEach((section, index) => {
        gsap.from(section, {
          y: 50, // Start position (move in from bottom)
          opacity: 0, // Start opacity
          duration: 1.2, // Animation duration
          delay: index * 0.2, // Stagger the animation for each section
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
