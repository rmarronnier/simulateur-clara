<template>
  <v-app>
    <TopBar />
    <v-content>
      <Simulator />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Simulator from "./components/Simulator";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Simulator,
    TopBar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
