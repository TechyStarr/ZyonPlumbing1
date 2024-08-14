<template>
  <div class="overflow-hidden">
    <AboutUsComponent />
  </div>
</template>

<script>
import AboutUsComponent from '@/components/about/AboutUsComponent.vue';

export default {
  name: 'AboutUsView',
  components: {
    AboutUsComponent
  },
    created() {
    console.log('About.vue created');
  },
  mounted() {
    window.scrollTo(0, 0); // Forces the scroll to the top
    console.log('About.vue mounted');

  },
  
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
