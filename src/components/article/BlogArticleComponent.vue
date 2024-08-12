<template>
  <div v-if="article">
    <div class="relative md:mt-header-margin">
      <img v-lazy="require('@/assets/imageblog1.png')" alt="Blog Header Image" class="w-full h-[449px] object-cover">
      <div class="absolute top-64 md:top-20 left-4 md:left-6 px-6 md:px-20 py-16 md:py-32 space-y-4 text-white">
        <h1 ref="blogTitle" class="text-[24px] md:text-[48px] lg:text-[64px] w-[297px] md:w-[800px] lg:w-[1150px] text-center md:text-left font-extrabold leading-tight">
          {{ article.title }}
        </h1>
      </div>
    </div>
    <div class="p-4 md:p-[70px]">
      <div class="md:flex md:space-x-10">
        <div ref="blogImage" class="md:border border-foundationGreyLightActive rounded-[10px] overflow-hidden">
          <img v-lazy="headerImage" alt="Article Image" class="w-full h-[168px] md:h-[413px] object-cover">
          <div ref="blogText" class="p-4 md:p-12 space-y-3 md:space-y-8">
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
                <a href="https://www.facebook.com/profile.php?id=61563833889325&mibextid=ZbWKwL" target="_blank">
                  <img src="@/assets/Facebook-b.svg" alt="Facebook Logo" class="h-5 md:h-[30px] cursor-pointer">
                </a>
                <!-- Instagram Icon -->
                <a href="Instagram.com/zyonsplumbingandheating" target="_blank">
                  <img src="@/assets/Instagram-b.svg" alt="Instagram Logo" class="h-5 md:h-[30px] cursor-pointer">
                </a>
                <!-- LinkedIn Icon -->
                <a href="https://www.linkedin.com/company/zyon-s-plumbing-and-heating/" target="_blank">
                  <img src="@/assets/LinkedIn2-b.svg" alt="LinkedIn Logo" class="h-5 md:h-[30px] cursor-pointer">
                </a>
              </div>
            </div>
          </div>
          <ToastNotification ref="toast" />
          <!-- Additional Content -->
        </div>
        <!-- Sidebar or Related Content -->
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center mt-10">Article not found.</p>
  </div>
</template>

<script>
import ToastNotification from '@/components/ToastNotification.vue';
import { nextTick } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'BlogArticleComponent',
  components: {
    ToastNotification,
  },
  mounted() {
    nextTick(() => {
      window.scrollTo(0, 0); // Forces the scroll to the top after rendering
    });

    // Animate the title moving in from the left
    gsap.from(this.$refs.blogTitle, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: this.$refs.blogTitle,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Animate the image and text content
    gsap.from([this.$refs.blogImage, this.$refs.blogText], {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: this.$refs.blogContent,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
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
      categories: [
        {
          name: 'Maintenance',
          articles: [
            { id: 1, title: 'The Benefits of Regular Plumbing Maintenance',},
            { id: 2, title: 'How to Keep Your Plumbing in Top Shape' }
          ],
          isOpen: false
        },
        {
          name: 'Tips',
          articles: [
            { id: 3, title: 'Top questions to ask when hiring a plumber', category: 'tips',},
            { id: 5, title: '5 DIY plumbing fixes you can tackle yourself (safely!)',},
            { id: 6, title: 'How to prevent and clear clogged drains', category: 'tips',},
            { id: 8, title: 'How repiping can improve your home’s water quality', category: 'tips',},
            { id: 9, title: 'Protecting your home from lead contamination', date: 'JULY 27, 2024', image: 'Frame-6.png', category: 'tips',},
          ],
          isOpen: false
        },
        {
          name: 'Repair',
          articles: [
            { id: 7, title: 'What to expect during a home repiping project', category: 'tips',},
          ],
          isOpen: false
        },
        {
          name: 'Bathroom',
          articles: [
            { id: 4, title: 'How to choose the best plumbing fixtures for your bathroom remodel', category: 'Bathroom',},
          ],
          isOpen: false
        }
      ],
      relatedPosts: [
        { id: 7, image: 'Rectangle1.png', title: 'What to Expect During a Home Repiping Project', date: 'JULY 27, 2024' },
        { id: 8, image: 'Rectangle1-1.png', title: "How Repiping Can Improve Your Home's Water Quality", date: 'JULY 27, 2024' },
        { id: 9, image: 'Rectangle1-2.png', title: 'Protecting Your Home from Lead Contamination', date: 'JULY 27, 2024' },
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
    },
    toggleCategory(category) {
      category.isOpen = !category.isOpen;
    
      if (category.isOpen && category.articles.length > 0) {
        console.log('Opened')
      }
    },
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
