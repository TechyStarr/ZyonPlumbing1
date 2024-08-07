<template>
  <div class="space-y-12">
    <about-header-section />
    <about-us-section />
    <mission-section />
    <our-commitment-section />
  </div>
</template>

<script>
import AboutHeaderSection from './AboutHeaderSection.vue';
import AboutUsSection from '../home/AboutUsSection.vue';
import MissionSection from './MissionSection.vue';
import OurCommitmentSection from './OurCommitmentSection.vue';

export default {
  components: {
    AboutHeaderSection,
    AboutUsSection,
    MissionSection,
    OurCommitmentSection,
  },
  created() {
    console.log('MainComponent.vue created');
  },
  mounted() {
    console.log('MainComponent.vue mounted');
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
