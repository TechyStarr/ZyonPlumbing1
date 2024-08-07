<template>
  <div class="">
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
    console.log('About.vue mounted');
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
