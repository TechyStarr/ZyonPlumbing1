<template>
  <div>
    <NavBar />
    <ServicesHeaderSection />
    <ServicesSection />
    <OurProjectGallery />
  </div>
</template>

<script>
import ServicesHeaderSection from '@/components/services/ServicesHeaderSection.vue';
import ServicesSection from '@/components/services/ServicesSection.vue'
import OurProjectGallery from '@/components/services/OurProjectGallery.vue'


export default {
  name: 'ServicesComponent',
  components: {
    ServicesHeaderSection,
    ServicesSection,
    OurProjectGallery
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
