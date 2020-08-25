<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
    <Aside />
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Aside from "./../components/Aside";
import Subscribe from "./../components/Subscribe";

export default {
  components: {
    Header,
    Footer,
    Aside,
    Subscribe,
  },
};
</script>

<style>
.layout {
  max-width: 620px;
  margin: 0 auto 3em;
  padding: 0 10px;
}

@media (min-width: 620px) {
  .layout {
    padding: 0;
  }
}
</style>
