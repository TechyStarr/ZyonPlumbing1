<template>
  <div v-if="article">
    <div class="relative">
      <img v-lazy="require('@/assets/imageblog1.png')" alt="Blog Header Image" class="w-full h-[449px] object-cover">
      <div class="absolute top-64 md:top-20 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
        <h1 class="text-[24px] md:text-[48px] lg:text-[64px] w-[297px] md:w-[800px] lg:w-[1150px] text-center md:text-left font-extrabold leading-tight">
          {{ article.title }}
        </h1>
      </div>
    </div>
    <div class="p-4 md:p-[70px]">
      <div class="md:flex md:space-x-10">
        <div class="md:border border-foundationGreyLightActive rounded-[10px] overflow-hidden">
          <img v-lazy="headerImage" alt="Article Image" class="w-full h-[168px] md:h-[413px] object-cover">
          <div class="p-4 md:p-12 space-y-3 md:space-y-8">
            <div class="flex space-x-6">
              <h1 class="font-semibold text-[16px] md:text-[18px] text-foundationGreyNormal">{{ article.date }}</h1>
              <div class="flex items-center space-x-3">
                <img src="@/assets/chevron-right.png" alt="Chevron Icon" class="h-5">
                <p class="font-nunito text-left text-[16px] md:text-[18px]">Maintenance</p>
              </div>
            </div>
            <hr class="w-full border-t-[1px] border-foundationGreyLightActive mt-5">
            <div class="md:flex">
              <div class="font-nunito text-left w-full md:w-[688px] space-y-2" v-html="article.content"></div>
            </div>
            <hr class="w-full border-t-[1px] border-foundationGreyLightActive mt-12 mb-12">
            <div class="flex space-x-12 justify-center item-center mt-4">
                <!-- Share Icon -->
                <img @click="shareArticle" src="@/assets/Share.svg" alt="Share Icon" class="h-5 md:h-[30px] cursor-pointer">
                <div class="flex space-x-6">
                  <!-- Copy Link Icon -->
                  <img ref="copyLinkIcon" @click="copyLink" src="@/assets/Link.svg" alt="CopyLink Icon" class="h-5 md:h-[30px] cursor-pointer">
                  <!-- Facebook Icon -->
                  <a href="https://www.facebook.com/sharer/sharer.php?u=YOUR_ARTICLE_URL" target="_blank">
                    <img src="@/assets/Facebook-b.svg" alt="Facebook Logo" class="h-5 md:h-[30px] cursor-pointer">
                  </a>
                  <!-- Instagram Icon -->
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src="@/assets/Instagram-b.svg" alt="Instagram Logo" class="h-5 md:h-[30px] cursor-pointer">
                  </a>
                  <!-- LinkedIn Icon -->
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=YOUR_ARTICLE_URL" target="_blank">
                    <img src="@/assets/LinkedIn2-b.svg" alt="LinkedIn Logo" class="h-5 md:h-[30px] cursor-pointer">
                  </a>
                </div>
            </div>
          </div>
          <ToastNotification ref="toast" />
          <div class="md:hidden p-4 md:p-12 space-y-3 md:space-y-8">
            <div class="mt-6">
              <div class="flex space-x-5 items-center">
                <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
                <h1 class="font-extrabold text-[18px]">TAGS</h1>
              </div>
              <div class="flex flex-wrap items-center mt-2 ">
                <span v-for="tag in tags" :key="tag" class="space-x-4 mb-4 text-[16px] bg-foundationGreyLightHover text-foundationGreyDarker px-4 py-1 rounded-[10px]">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="mt-12">
              <div class="flex space-x-5 items-center">
                <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
                <h1 class="font-extrabold text-[18px]">RELATED POSTS</h1>
              </div>
              <div class="space-y-6 mt-6">
                <router-link
                  v-for="post in relatedPosts"
                  :key="post.id"
                  :to="{ name: 'BlogArticle', params: { id: post.id } }"
                  class="flex space-x-3"
                >
                  <img v-lazy="require(`@/assets/${post.image}`)" alt="Related Post Image" class="w-[112px] h-[101px] rounded-[10px]">
                  <div class="space-y-2">
                    <p class="text-left w-[205px]  pb-6">{{ post.title }}</p>
                    <p class="text-[14px] text-left text-[#454545] mt-2">{{ post.date }}</p>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="mt-12">
              <div class="flex space-x-5 items-center">
                <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
                <h1 class="font-extrabold text-[18px]">CATEGORIES</h1>
              </div>
              <div class="space-y-4 mt-4">
                <div class="flex items-center space-x-3" v-for="category in categories" :key="category">
                  <img src="@/assets/chevron-right.png" alt="Chevron Icon" class="h-5">
                  <p class="text-left text-foundationGreyDarker">{{ category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:w-1/3">
          <div class="space-y-6">
            <div class="flex space-x-5 items-center">
              <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
              <h1 class="font-extrabold text-[18px] md:text-[32px]">CATEGORIES</h1>
            </div>
            <div class="space-y-4">
              <div class="flex items-center space-x-3" v-for="category in categories" :key="category">
                <img src="@/assets/chevron-right.png" alt="Chevron Icon" class="h-5">
                <p class="text-left text-foundationGreyDarker">{{ category }}</p>
              </div>
            </div>
          </div>
          <div class="space-y-6 mt-24">
            <div class="flex space-x-5 items-center">
              <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
              <h1 class="font-extrabold text-[18px] md:text-[32px]">RELATED POSTS</h1>
            </div>
            <div class="space-y-6">
              <router-link
                v-for="post in relatedPosts"
                :key="post.id"
                :to="{ name: 'BlogArticle', params: { id: post.id } }"
                class="flex space-x-3"
              >
                <img v-lazy="require(`@/assets/${post.image}`)" alt="Related Post Image" class="w-[112px] h-[101px] rounded-[10px]">
                <div class="space-y-2">
                  <p class="text-left w-[205px]">{{ post.title }}</p>
                  <p class="text-[14px] text-left text-[#454545]">{{ post.date }}</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="space-y-3 mt-24">
            <div class="flex space-x-5 items-center">
              <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
              <h1 class="font-extrabold text-[18px] md:text-[32px]">TAGS</h1>
            </div>
            <div class="flex flex-wrap items-center gap-5 mt-2">
              <span v-for="tag in tags" :key="tag" class="text-[16px] bg-foundationGreyLightHover text-foundationGreyDarker px-4 py-1 rounded-[10px]">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Leave a Reply Section -->
      <div class="space-y-6 mt-24">
        <div class="flex space-x-5 items-center">
          <hr class="w-[50px] border-t-[3px] border-lineStrokeDark">
          <h1 class="font-extrabold text-[18px] md:text-[32px]">LEAVE A REPLY</h1>
        </div>
        <div class="w-full md:w-[828px] h-auto p-4 md:p-12 space-y-8 border border-foundationGreyLightActive rounded-[10px]">
          <p class="text-left mb-9 font-nunito text-[14px] md:text-[16px]">
            Your email address will not be published. Required fields are marked *
          </p>
          <div class="flex space-x-6">
            <input type="text" id="name" v-model="name" placeholder="Enter your name" class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker">
            <input type="email" id="email" v-model="email" placeholder="Email" class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker">
          </div>
          <textarea id="message" v-model="message" placeholder="Write Comment" class="w-full h-[248px] px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker" rows="5"></textarea>
          <button type="submit" class="w-[190px] h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full" @click.prevent="handleSubmit">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center mt-10">Article not found.</p>
  </div>
</template>

<script>
import ToastNotification from '@/components/ToastNotification.vue';

export default {
  name: 'BlogArticleComponent',
  components: {
    ToastNotification,
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tags: ['Bathroom', 'Cleaning', 'Tips', 'Maintenance', 'Repiping'],
      categories: ['Maintenance', 'Tips', 'Repairs', 'Bathroom', 'Heating'],
      relatedPosts: [
        { id: 7, image: 'Rectangle1.png', title: 'What to Expect During a Home Repiping Project', date: 'JULY 27, 2024' },
        { id: 8, image: 'Rectangle1-1.png', title: "How Repiping Can Improve Your Home's Water Quality", date: 'JULY 27, 2024' },
        { id: 9, image: 'Rectangle1-2.png', title: 'Protecting Your Home from Lead Contamination', date: 'JULY 27, 2024' },
        { id: 4, image: 'Rectangle1-3.png', title: 'What to Expect During a Home Repiping Project', date: 'JULY 13, 2024' },
      ],
      name: '',
      email: '',
      message: '',
    };
  },
  computed: {
    headerImage() {
      return this.article ? require(`@/assets/${this.article.image}`) : '';
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
    },
    shareArticle() {
      if (navigator.share) {
        navigator.share({
          title: 'Check out this article!',
          url: window.location.href
        }).then(() => {
          console.log('Thanks for sharing!');
        }).catch(console.error);
      } else {
        alert('Sharing is not supported by your browser. Copy the link instead!');
      }
    },
    copyLink() {
      const link = window.location.href;
      navigator.clipboard.writeText(link).then(() => {
        const iconRect = this.$refs.copyLinkIcon.getBoundingClientRect();
        const toastPosition = {
          top: `${iconRect.top + window.scrollY - 40}px`,
          left: `50%`,
          transform: 'translateX(-50%)', // Center the toast horizontally
        };
        this.$refs.toast.showToast('Link copied to clipboard!', toastPosition);
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    }
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>

