<template>
  <footer>
    <SocialLinks />
    <nav>
      <ul>
        <li>
          <g-link to="/about">About</g-link>
        </li>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
      </ul>
    </nav>
    <p class="copyright">
      &copy; {{new Date().getFullYear().toString()}}
      <g-link to="/">{{$static.metadata.siteName}}</g-link>
    </p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
.copyright {
  margin-top: 0;
  text-align: center;
}
li {
    text-align: center;
}
</style>