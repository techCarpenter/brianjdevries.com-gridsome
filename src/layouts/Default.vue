<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
    <!-- <Aside /> -->
    <div style="height: var(--footer-height);"></div>
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
  max-width: var(--article-width);
  margin: 0 auto;
  padding: 0 0.75rem;
}

@media (min-width: 40rem) {
  .layout {
    padding: 0;
  }
}
</style>
