<template>
  <div>
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
  }
  
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
