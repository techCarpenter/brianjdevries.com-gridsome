<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
    <!-- <Aside /> -->
    <div style="height: 50px;"></div>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
// import Aside from "./../components/Aside";

export default {
  components: {
    Header,
    Footer,
    // Aside,
  },
};
</script>

<style>
.layout {
  max-width: 620px;
  margin: 0 auto;
  padding: 0 10px;
}

@media (min-width: 620px) {
  .layout {
    padding: 0;
  }
}
</style>
