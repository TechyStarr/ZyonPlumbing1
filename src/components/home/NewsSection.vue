<template>
    <div class="w-full h-[788px] rounded mt-18 bg-gray-100 p-12"  style="">
        <div class=" flex space-x-5 justify-center items-center">
            <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
            <h1 class="font-extrabold text-[18px] md:text-[24px] lg:text-[32px] text-foundationGreyDarker">READ LATEST NEWS</h1>
            <hr class="w-[50px] border-t-[3px] border-lineStrokeDark mr-4">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="article in articles" :key="article.id" class="mt-12 space-y-2 text-left">
            <div class="relative w-[387px] h-[289px]">
              <img :src="require(`@/assets/${article.image}`)" alt="Article image" class="w-full h-full rounded">
              <p class="absolute top-2 left-2 bg-foundationGoldNormal text-white font-bold py-2 px-4 rounded-full">
                {{ article.category }}
              </p>
            </div>
            <h1 class="font-semibold text-[18px] text-foundationGreyNormal">{{ article.date }}</h1>
            <router-link class="font-semibold text-[18px] hover:text-customGold" :to="`/blog/${article.id}`">
              {{ article.title }}
            </router-link>
            <div class="flex space-x-3">
              <p class="text-[18px] text-foundationGoldDarker font-nunito">Read More</p>
              <img src="@/assets/chevron-right.png" alt="Check square" class="h-6">
            </div>
          </div>
        </div>

        <button class="w-[190px] h-[60px] mt-12 bg-[#181818] hover:bg-customGold text-white font-bold rounded-full">
                View Articles
        </button>

    </div>
</template>

<script>
export default {
  name: 'AboutUsSection',

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
            date: 'JULY 13, 2024',
            image: 'image-12.png',
            category: 'Maintenance'
          },
          {
            id: '3',
            title: 'Signs Your Home Needs Repiping: What to Look For',
            date: 'JULY 13, 2024',
            image: 'image-12.png',
            category: 'Maintenance'
          },
          // Add more articles here
        ]
      }
    }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
