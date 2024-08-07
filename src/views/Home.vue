<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from '@/components/home/HomeComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
  },
  created() {
    console.log('Home.vue created');
  },
  mounted() {
    console.log('Home.vue mounted');
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
