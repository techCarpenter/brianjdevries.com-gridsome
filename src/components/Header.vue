<template>
  <header>
    <div class="container">
      <g-link class="logo" to="/" @click="closeMenu">
        <g-image src="../../static/android-chrome-192x192.png" width="40" />
      </g-link>
      <button @click="toggleMenu">
        <span v-if="!menuVisible">&#9776;</span>
        <span v-else>&#10006;</span> Menu
      </button>
    </div>
    <nav :class="{openMenu: menuVisible}">
      <ul>
        <li>
          <g-link class="nav-link" to="/" @click="closeMenu">
            <strong>Start Here</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/about/" @click="closeMenu">
            <strong>My Story</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/now/" @click="closeMenu">
            <strong>Now</strong>
          </g-link>
        </li>
        <li>
          <g-link class="nav-link" to="/blog/" @click="closeMenu">
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
    closeMenu() {
      this.menuVisible = false;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--black-coffee);
  padding: 0.65rem;
}
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1000 / 16) rem;
}
.logo {
  display: flex;
}
.openMenu {
  opacity: 1;
  visibility: visible;
  height: auto;
  max-height: 18rem;
  margin-bottom: 0.65rem;
  transition: max-height 0.3s ease-out, opacity 0.3s linear 0.3s;
}
nav {
  opacity: 0;
  visibility: hidden;
  padding: 0;
  display: flex;
  position: relative;
  background-color: var(--black-coffee);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  max-height: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-in;
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
  font-size: 1.8rem;
  text-align: center;
  display: inline-block;
  width: 100%;
  padding: 0.33rem;
}
.nav-link:focus,
.nav-link:active,
.nav-link:hover {
  text-decoration: none;
  color: var(--grullo);
  transition: all 0.3s ease;
}
.active--exact:not(.logo) {
  color: var(--cinnabar);
}
button {
  border-radius: 0.4rem;
  background-color: var(--cinnabar);
  color: #eee;
  padding: 0.65rem;
}
button:hover {
  cursor: pointer;
}
</style>