<template>
  <div class="mt-">
    <form class="w-full max-w-lg space-y-5">
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
        v-model="phone"
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
        class="w-[190px] h-[60px] bg-[#181818] hover:bg-customGold text-white font-bold rounded-full text-center flex items-center justify-center"
        @click.prevent="handleSubmit"
      >
        Send Message
      </button>

    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

emailjs.init('EsSWdxHedPRxQvbHe'); // Initialize EmailJS with your user ID

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      const templateParams = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      emailjs.send('service_5lm5vzb', 'template_bonqf9k', templateParams)
        .then(response => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          // Clear form fields after submission
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        }, error => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    },
  },
};

</script>

<style scoped>
/* Add any custom styles here */
</style>
