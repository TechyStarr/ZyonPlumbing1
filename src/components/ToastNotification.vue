<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-[200px] left-1/2 transform -translate-x-1/2 bg-brown-100 text-foundationGoldDarker px-4 py-2 rounded-md shadow-md shadow-md shadow-lg inline-block h-[40px] whitespace-nowrap text-center"
      :style="position"
    >
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
      position: {},
    };
  },
  methods: {
    showToast(msg, customPosition = null) {
      this.message = msg;
      this.position = customPosition ? customPosition : {};
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
