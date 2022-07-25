<template>
  <Header />
  <!-- <HomeView /> -->
  <ClientInfo />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import HomeView from './views/HomeView.vue'
import ClientInfo from "./components/ClientInfo.vue";
const oldScripts = [
  // 'oldjs/jquery.min.js',
  "oldjs/jquery-migrate-3.0.1.min.js",
  "oldjs/popper.min.js",
  "oldjs/bootstrap.min.js",
  "oldjs/jquery.easing.1.3.js",
  "oldjs/jquery.waypoints.min.js",
  "oldjs/jquery.stellar.min.js",
  "oldjs/owl.carousel.min.js",
  "oldjs/jquery.magnific-popup.min.js",
  "oldjs/aos.js",
  "oldjs/jquery.animateNumber.min.js",
  "oldjs/bootstrap-datepicker.js",
  "oldjs/scrollax.min.js",
  "oldjs/google-map.js",
  "oldjs/main.js",
];
export default {
  name: "App",
  components: {
    Header,
    ClientInfo,
    Footer,
    // HomeView
  },
  created() {
    let oldScript = document.createElement("script");
    oldScript.setAttribute("src", "oldjs/jquery.min.js");
    document.head.appendChild(oldScript);
  },

  mounted() {
    setTimeout(() => {
      oldScripts.map((s) => {
        let oldScript = document.createElement("script");
        oldScript.setAttribute("src", s);
        document.head.appendChild(oldScript);
      });
    }, 100);
    console.log("hear my message: ", this.msgdmd);
  },
};
</script>

<style></style>
