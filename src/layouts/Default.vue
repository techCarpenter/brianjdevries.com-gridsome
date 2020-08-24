<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.layout {
  max-width: 620px;
  margin: 0 auto 3em;
  padding: 0 10px;
}

@media (min-width: 760px) {
  .layout {
    padding: 0;
  }
}
</style>
