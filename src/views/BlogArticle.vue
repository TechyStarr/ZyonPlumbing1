<template>
  <div>
    <BlogArticleComponent :article="article" v-if="article" />
    <div class="container mx-auto py-10" v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import BlogArticleComponent from '@/components/article/BlogArticleComponent.vue';

export default {
  name: 'BlogArticle',
  components: {
    BlogArticleComponent
  },
  data() {
    return {
      article: null
    }
  },
  created() {
    const articleId = this.$route.params.id;
    this.article = this.fetchArticleById(articleId);
  },
  methods: {
    fetchArticleById(id) {
      const articles = [
        {
          id: '1',
          title: 'The Benefits of Regular Plumbing Maintenance',
          date: 'JULY 13, 2024',
          image: 'header-img.png',
          content: "Imagine this: you're relaxing in a hot shower, and suddenly, a geyser erupts from behind the wall. Not exactly the picture of home comfort, right? Unfortunately, this scenario (or variations of it) can become a reality if your home's plumbing system is nearing the end of its lifespan. Here's the thing: pipes, like most things in life, don't last forever. While they silently transport water throughout your home, there are subtle signs that can warn you of potential trouble brewing beneath the surface. Here's how to know if your home might be whispering (or maybe even shouting) that it's time for a repiping: The Tell-Tale Signs of Aging Pipes: Discolored Water: Do you notice rusty or brown water coming out of your faucets? This can indicate corrosion within the pipes, contaminating your water supply. Frequent Clogs: While occasional clogs happen, if you're constantly battling blockages, it might be a sign of deteriorating pipes that are flaking or collapsing internally. Fluctuating Water Pressure: Low or inconsistent water pressure throughout your home can point to narrowed pipes due to rust or buildup. Visible Pipe Leaks: This one's fairly obvious. If you see leaks or water damage around pipes, especially near connections, it's a clear sign of deterioration. Unexplained Water Bill Spikes: A sudden increase in your water bill with no apparent change in water usage could be due to hidden leaks caused by compromised pipes. Beyond the Physical Signs: Age is also a big factor. If your home was built more than 50 years ago, the pipes could be nearing the end of their expected lifespan, depending on the material. Certain pipe materials, like galvanized steel or polybutylene, have known issues with corrosion and shorter lifespans. Taking Action: If you're experiencing any of these signs, don't wait for a major plumbing disaster to strike. A qualified plumber can assess your home's plumbing system and recommend the best course of action. Repiping your home might seem like a daunting task, but it's an investment that ensures clean, reliable water flow and peace of mind for years to come. Don’t fail to contact Zyons."
        },
        {
          id: '2',
          title: 'Signs Your Home Needs Repiping: What to Look For',
          date: 'JULY 13, 2024',
          image: 'header-img.png',
          content: `
                    <p>Imagine this: you're relaxing in a hot shower, and suddenly, a geyser erupts from behind the wall. Not exactly the picture of home comfort, right? Unfortunately, this scenario (or variations of it) can become a reality if your home's plumbing system is nearing the end of its lifespan. Here's the thing: pipes, like most things in life, don't last forever.</p>
                    <p class="pt-6">While they silently transport water throughout your home, there are subtle signs that can warn you of potential trouble brewing beneath the surface. Here's how to know if your home might be whispering (or maybe even shouting) that it's time for a repiping:</p>
                    <ul>
                      <p class="pt-6"><strong>The Tell-Tale Signs of Aging Pipes:</strong></p>
                      <li class="mb-2">Discolored Water: Do you notice rusty or brown water coming out of your faucets? This can indicate corrosion within the pipes, contaminating your water supply.</li>
                      <li class="mb-2">Frequent Clogs: While occasional clogs happen, if you're constantly battling blockages, it might be a sign of deteriorating pipes that are flaking or collapsing internally.</li>
                      <li class="mb-2">Fluctuating Water Pressure: Low or inconsistent water pressure throughout your home can point to narrowed pipes due to rust or buildup.</li>
                      <li class="mb-2">Visible Pipe Leaks: This one's fairly obvious. If you see leaks or water damage around pipes, especially near connections, it's a clear sign of deterioration.</li>
                      <li class="mb-2">Unexplained Water Bill Spikes: A sudden increase in your water bill with no apparent change in water usage could be due to hidden leaks caused by compromised pipes.</li>
                    </ul>
                    <p class="pt-6"><strong>Beyond the Physical Signs:</strong></p>
                    <p>Age is also a big factor. If your home was built more than 50 years ago, the pipes could be nearing the end of their expected lifespan, depending on the material. Certain pipe materials, like galvanized steel or polybutylene, have known issues with corrosion and shorter lifespans.</p>
                    <p class="pt-6"><strong>Taking Action:</strong></p>
                    <p>If you're experiencing any of these signs, don't wait for a major plumbing disaster to strike. A qualified plumber can assess your home's plumbing system and recommend the best course of action. Repiping your home might seem like a daunting task, but it's an investment that ensures clean, reliable water flow and peace of mind for years to come. Don’t fail to <span class="text-[#06B6F1]">contact</span> Zyons.</p>`        
                  },
        // Add more articles here
      ];
      return articles.find(article => article.id === id);
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
