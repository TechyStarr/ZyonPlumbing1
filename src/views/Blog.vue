<template>
  <div>
    <Navbar />
    <BlogComponent />
  </div>
</template>

<script>
import BlogComponent from '@/components/blog/BlogComponent.vue'


export default {
  name: 'BlogView',
  components: {
    BlogComponent
  }
}
</script>

<style scoped>
</style>
