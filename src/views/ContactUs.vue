<template>
  <div class="overflow-hidden">
    <NavBar />
    <ContactComponent />
  </div>
</template>

<script>
import ContactComponent from '@/components/contact/ContactComponent.vue'

export default {
  name: 'ContactUs',
  components: {
    ContactComponent
  },
  mounted() {
    window.scrollTo(0, 0); // Forces the scroll to the top
  },
  
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
