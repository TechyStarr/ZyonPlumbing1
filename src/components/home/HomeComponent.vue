<template>
  <div space-y class="overflow-hidden">
    <header-section />
    <about-us-section />
    <services-section />
    <projects-section />
    <testimonials-section />
    <news-section />
    <faqs-section />
    <contact-section />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import AboutUsSection from './AboutUsSection.vue';
import ServicesSection from './ServicesSection.vue';
import ProjectsSection from './ProjectsSection.vue';
import TestimonialsSection from './TestimonialsSection.vue';
import NewsSection from './NewsSection.vue';
import FaqsSection from './FaqsSection.vue';
import ContactSection from './ContactSection.vue';

export default {
  components: {
    HeaderSection,
    AboutUsSection,
    ServicesSection,
    ProjectsSection,
    TestimonialsSection,
    NewsSection,
    FaqsSection,
    ContactSection,
  },
  
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
