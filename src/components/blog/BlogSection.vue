<template>
  <div ref="blogSection" class="w-full rounded mt-18 bg-gray-100 pt-12 p-6 md:p-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      <h1 class="font-extrabold text-[18px] md:text-[32px]">READ LATEST NEWS</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
    </div>

    <div class="flex font-nunito mt-7 md:mt-12 space-x-2 md:space-x-3 ml-4 md:ml-0 text-[14px] md:text-[16px]">
      <p class="w-[44px] md:w-[61px] h-[20px] md:h-[30px] bg-customGold hover:bg-customGold text-white rounded-full flex items-center justify-center">
        All
      </p>
      <p class="w-[44px] md:w-[61px] h-[20px] md:h-[30px] bg-foundationGreyLightHover hover:bg-customGold text-black rounded-full flex items-center justify-center">
        Tips
      </p>
      <p class="w-[122px] h-[20px] md:h-[30px] bg-foundationGreyLightHover hover:bg-customGold text-black rounded-full flex items-center justify-center">
        Maintenance
      </p>
      <p class="w-[62px] h-[20px] md:h-[30px] bg-foundationGreyLightHover hover:bg-customGold text-black rounded-full flex items-center justify-center">
        News
      </p>
    </div>

    <div class="flex justify-center px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="article in articles" :key="article.id" class="mt-7 md:mt-12 space-y-2 text-left">
          <div class="relative w-full h-[289px]">
            <img v-lazy="require(`@/assets/${article.image}`)" alt="Article image" class="w-full h-full rounded">
            <p class="absolute top-2 left-2 bg-foundationGoldNormal text-[16px] md:text-[18px] text-white font-bold py-2 px-4 rounded-full">
              {{ article.category }}
            </p>
          </div>
          <h1 class="font-semibold text-[16px] md:text-[18px] text-foundationGreyNormal">{{ article.date }}</h1>
          <router-link class="font-semibold text-[16px] md:text-[18px] hover:text-customGold" :to="`/blog/${article.id}`">
            {{ article.title }}
          </router-link>
          <div class="flex space-x-3 items-center">
            <p class="text-[16px] md:text-[18px] text-foundationGoldDarker font-nunito">Read More</p>
            <img v-lazy="require('@/assets/chevron-right.png')" alt="Check square" class="h-5 md:h-6">
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-20 justify-center">
      <img v-lazy="require('@/assets/chevron-left.png')" alt="Check square" class="h-8">
      <img v-lazy="require('@/assets/chevron-right.png')" alt="Check square" class="h-8">
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'BlogSection',
  data() {
    return {
      articles: [
        {
          id: '1',
          title: 'The Benefits of Regular Plumbing Maintenance',
          date: 'JULY 13, 2024',
          image: 'image-12.png',
          category: 'Maintenance'
        },
        {
          id: '2',
          title: 'Signs Your Home Needs Repiping: What to Look For',
          date: 'AUGUST 24, 2024',
          image: 'image-13.png',
          category: 'Maintenance'
        },
        {
          id: '3',
          title: 'Top questions to ask when hiring a plumber',
          date: 'AUGUST 1, 2024',
          image: 'image-14.png',
          category: 'Tips'
        },
        {
          id: '4',
          title: 'How to choose the best plumbing fixtures for your bathroom remodel',
          date: 'JULY 24, 2024',
          image: 'image14-1.png',
          category: 'Bathroom'
        },
        // Add more articles here
      ]
    }
  },
  mounted() {
    gsap.from(this.$refs.blogSection, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: this.$refs.blogSection,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
