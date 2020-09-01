<template>
  <header>
    <div class="container">
      <g-link class="logo" to="/">
        <g-image src="../../static/android-chrome-192x192.png" width="40" />
      </g-link>
      <button @click="toggleMenu">Menu</button>
    </div>
    <nav :class="{openMenu: menuVisible}">
      <ul>
        <li>
          <g-link class="nav-link" to="/">
            <strong>Start Here</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/about/">
            <strong>My Story</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/now/">
            <strong>Now</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/blog/">
            <strong>Blog</strong>
          </g-link>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SocialLinks from "./SocialLinks";

export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  components: {
    SocialLinks,
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--black-coffee);
  padding: 10px;
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
}
.logo,
.openMenu {
  display: flex;
}
nav {
  padding: 0px 0px 10px;
  display: none;
  background-color: var(--black-coffee);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
ul {
  width: 100%;
  padding: 0;
}
nav li {
  width: 100%;
}
.nav-link {
  color: #eee;
  font-size: 1.5em;
  text-align: center;
  display: inline-block;
  width: 100%;
  padding: 5px;
}
.nav-link:focus,
.nav-link:active,
.nav-link:hover {
  text-decoration: none;
  color: var(--grullo);
  animation-duration: 300ms;
}
.active--exact:not(.logo) {
  color: var(--cinnabar);
}
button {
  border-radius: 6px;
  background-color: var(--cinnabar);
  color: #eee;
  padding: 10px;
}
button:hover {
  cursor: pointer;
}
</style>