<template>
  <div class="w-full justify-center items-center h-auto rounded mt-18 bg-gray-100 py-6 md:py-12">
    <div class="flex space-x-5 justify-center items-center">
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
      <h1 class="font-extrabold text-[18px] md:text-[24px] lg:text-[32px] text-foundationGreyDarker">READ LATEST NEWS</h1>
      <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
    </div>
    <div class="flex justify-center ">
      <div class="max-w-screen-lg max-w-screen-sm w-full flex justify-center gap-4">
        <div v-for="article in displayedArticles" :key="article.id" class="mt-6 md:mt-12 space-y-2 text-left article-container">
          <div class="relative w-[335px] md:w-[387px] h-[289px]">
            <img v-lazy="require(`@/assets/${article.image}`)" alt="Article image" class="w-full h-full rounded object-cover">
            <p class="absolute top-2 left-2 bg-foundationGoldNormal text-white font-bold py-2 px-4 rounded-full">
              {{ article.category }}
            </p>
          </div>
          <h1 class="font-semibold text-[18px] text-foundationGreyNormal">{{ article.date }}</h1>
          <router-link class="font-semibold w-[357px] text-[18px] hover:text-customGold" :to="`/blog/${article.id}`">
            {{ article.title }}
            <div class="flex space-x-3">
              <p class="text-[18px] text-foundationGoldDarker font-nunito">Read More</p>
              <img v-lazy="require('@/assets/chevron-right.png')" alt="Check square" class="h-6">
            </div>            
          </router-link>

        </div>
      </div>
    </div>

    <router-link to="/blog">
      <button class="w-[190px] h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full mt-12">
        View Articles
      </button>
    </router-link>
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
          image: 'Frame-1.png',
          category: 'Maintenance'
        },
        {
          id: '2',
          title: 'Signs Your Home Needs Repiping: What to Look For',
          date: 'JULY 13, 2024',
          image: 'Frame3.png',
          category: 'Maintenance'
        },
        {
          id: '3',
          title: 'Top questions to ask when hiring a plumber',
          date: 'AUGUST 12, 2024',
          image: 'Frame-8.png',
          category: 'Maintenance'
        },
        // Add more articles here
      ],
      isMobile: window.innerWidth < 768
    };
  },
  computed: {
    displayedArticles() {
      return this.isMobile ? [this.articles[0]] : this.articles;
    }
  },
  created() {
    window.addEventListener('resize', this.checkMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    }
  }
};
</script>

<style scoped>
/* Adjust the article container on mobile */
.article-container {
  margin-left: auto;
  margin-right: auto;
  width: 100%; /* Set the width to 100% on mobile */
}

@media (max-width: 768px) {
  .article-container {
    max-width: 335px; /* or whatever the width of your article should be on mobile */
  }
}
</style>
