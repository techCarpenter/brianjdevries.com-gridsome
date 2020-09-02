<template>
  <footer>
    <p
      class="copyright"
    >&copy; {{new Date().getFullYear().toString() + ' ' + $static.metadata.siteName}}</p>
  </footer>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import SocialLinks from "../components/SocialLinks";

export default {
  components: {
    SocialLinks,
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--black-coffee);
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.65rem 0;
  max-height: var(--footer-height);
}
.copyright {
  margin: 0;
  text-align: center;
}
</style>