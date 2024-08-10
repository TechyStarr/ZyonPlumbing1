<template>
  <div>
    <BlogComponent />
  </div>
</template>

<script>
import BlogComponent from '@/components/blog/BlogComponent.vue'


export default {
  name: 'BlogView',
  components: {
    BlogComponent
  },
  mounted() {
    window.scrollTo(0, 0); // Forces the scroll to the top
  },
  
}
</script>

<style scoped>
</style>
