<template>
  <div class="mt-">
    <form class=" w-full max-w-lg space-y-5">
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter your name"
          class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker"
        />
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
          class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker"
        />
        <input
          type="text"
          id="phone"
          v-model="name"
          placeholder="Phone Number"
          class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker"
        />
        <textarea
          id="message"
          v-model="message"
          placeholder="Message"
          class="w-full px-3 py-2 border border-foundationGreyLightActive rounded bg-transparent focus:outline-none focus:ring focus:border-blue-300 placeholder-foundationGreyDarker"
          rows="5"
        ></textarea>

      <button
        type="submit"
        class="w-[190px] h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full justify-start"
        @click.prevent="handleSubmit"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
      // Clear form fields after submission
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
