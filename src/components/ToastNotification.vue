<template>
    <transition name="fade">
      <div v-if="visible" class="fixed bottom-[500px] left-[500px] bg-purple-100 text-purple-800 px-4 py-2 rounded-md shadow-md">
        {{ message }}
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        message: '',
      };
    },
    methods: {
      showToast(msg) {
        this.message = msg;
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // Show for 3 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-exit-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  