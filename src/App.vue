<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  mounted() {
    window.scrollTo(0, 0); // Forces the scroll to the top
    console.log('Home.vue mounted');
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5F5F5;
  margin-top: 0px;
}
</style>
