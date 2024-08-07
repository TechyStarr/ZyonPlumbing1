<template>
  <div>
    <Navbar />
    <BlogHeaderSection />
    <BlogSection />
  </div>
</template>

<script>
import BlogHeaderSection from './BlogHeaderSection.vue';
import BlogSection from './BlogSection.vue'


export default {
  name: 'BlogComponent',
  components: {
    BlogHeaderSection,
    BlogSection
  }
}
</script>

<style scoped>
</style>
