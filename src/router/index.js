import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';
import Services from '@/views/Services.vue';
import Blog from '@/views/Blog.vue';
import BlogArticle from '@/views/BlogArticle';
import ContactUs from '@/views/ContactUs.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id', // Use a dynamic segment to capture the article ID or slug
    name: 'BlogArticle',
    component: BlogArticle
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
