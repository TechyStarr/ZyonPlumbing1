<template>
  <div space-y>
    <ContactHeaderSection />
    <ContactSection />
  </div>
</template>

<script>
import ContactHeaderSection from './ContactHeaderSection.vue'
import ContactSection from './ContactSection.vue'


export default {
  name: 'ContactComponent',
  components: {
    ContactHeaderSection,
    ContactSection
  },
    created() {
    console.log('AboutUsComponent.vue created');
  },
  mounted() {
    console.log('AboutUsComponent.vue mounted');
  },
  
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
