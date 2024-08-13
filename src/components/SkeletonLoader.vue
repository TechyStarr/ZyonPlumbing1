<template>
    <div :class="skeletonClass"></div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoader',
    props: {
      width: {
        type: String,
        default: '100%' // default width
      },
      height: {
        type: String,
        default: '100%' // default height
      },
      borderRadius: {
        type: String,
        default: '4px' // default border radius
      }
    },
    computed: {
      skeletonClass() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadius,
          backgroundColor: '#e0e0e0',
          backgroundImage: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  </style>
  